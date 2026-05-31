import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import axios from 'axios';

export default function HomeScreen({navigation, route}) {

  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (route.params?.newStudent) {
      setData(prev => [
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
      setError("");

    } catch (err) {

      setError("Failed Fetching API");

    } finally {

      setLoading(false);
      setRefreshing(false);

    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setError("");
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </SafeAreaView>
    );
  }
  
  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => {navigation.navigate('AddStudent')}}
          activeOpacity={0.8}
        >
          <Text style={styles.primaryButtonText}>Add Student</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton}
          onPress={() => {navigation.navigate('Scroll')}}
          activeOpacity={0.8}
        >
          <Text style={styles.secondaryButtonText}>Scroll Screen</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => {navigation.navigate('Details', {student: item})}}
            activeOpacity={0.7}
          >
            <View style={styles.studentCard}>
              <View style={styles.studentInfo}>
                <Text style={styles.studentName}>{item.name}</Text>
                <Text style={styles.studentEmail}>{item.email}</Text>
                <Text style={styles.studentPhone}>{item.phone}</Text>
              </View>
              <Text style={styles.arrowIcon}>→</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={true}
        contentContainerStyle={styles.listContent}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#2563eb',
    paddingVertical: 3,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: '600',
    color: '#ffffff',
    letterSpacing: 0.3,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#059669',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.3,
    fontFamily: 'sans-serif',
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#ad781c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#d97706',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  secondaryButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.3,
    fontFamily: 'sans-serif',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingBottom: 20,
  },
  studentCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 14,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    borderLeftWidth: 4,
    borderLeftColor: '#2563eb',
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 6,
    letterSpacing: 0.2,
  },
  studentEmail: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 4,
    fontWeight: '500',
  },
  studentPhone: {
    fontSize: 13,
    color: '#9ca3af',
    fontWeight: '400',
  },
  arrowIcon: {
    fontSize: 18,
    color: '#2563eb',
    marginLeft: 10,
    fontWeight: '600',
  },
  errorText: {
    fontSize: 16,
    color: '#dc2626',
    textAlign: 'center',
    padding: 20,
    fontWeight: '600',
  },
});
