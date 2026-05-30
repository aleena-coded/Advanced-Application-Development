import React, { useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';

const Details = ({ route, navigation }) => {
  const { student } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: student.name,
    });
  }, [navigation, student.name]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#6A1B9A" barStyle="light-content" />

      <View style={styles.card}>
        <Text style={styles.heading}>Student Details</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{student.name}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Username:</Text>
          <Text style={styles.value}>{student.username}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{student.email}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{student.phone}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Website:</Text>
          <Text style={styles.value}>{student.website}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>City:</Text>
          <Text style={styles.value}>{student.address.city}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Company:</Text>
          <Text style={styles.value}>{student.company.name}</Text>
        </View>

        <Pressable
          style={styles.scrollButton}
          onPress={() =>
            navigation.navigate('Scroll', {
              studentName: student.name,
              companyName: student.company.name,
            })
          }
        >
          <Text style={styles.buttonText}>View Scroll Demo</Text>
        </Pressable>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back to List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    padding: 15,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },

  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  label: {
    fontWeight: 'bold',
    width: 90,
  },

  value: {
    flex: 1,
  },

  scrollButton: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },

  backButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});