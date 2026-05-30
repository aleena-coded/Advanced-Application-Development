import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import axios from 'axios';

export default function HomeScreen({navigation, route}) {

  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [students, setStudents] = useState([]);
  useEffect(() => {
  if (route.params?.newStudent) {
    setStudents(prev => [
      route.params.newStudent,
      ...prev,
    ]);
  }
}, [route.params?.newStudent]);


  const fetchUsers = async () => {

    try {

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setData(response.data);

    } catch (err) {

      setError("Failed Fetching API");

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }
  
  return (
    
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity  onPress={
        ()=>{navigation.navigate('AddStudent')}
      }>
       <Text>Add Student</Text> 
        </TouchableOpacity>

        <TouchableOpacity  
  onPress={
        ()=>{navigation.navigate('Scroll')}
      }><Text>Scroll Info Screen</Text> </TouchableOpacity>
      <FlatList
        data={data}

        renderItem={({ item }) => {
          return(<TouchableOpacity onPress={ ()=>{navigation.navigate('Details',{student:item})}} ><View style={{backgroundColor:'red',padding:10}}>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
              <Text>{item.phone}</Text>
          </View></TouchableOpacity>) 
        }
         
          
        }

        keyExtractor={(item) => item.id.toString()}
        
  scrollEnabled={true} // default is true

        
      />
      </SafeAreaView>

   
  );
}