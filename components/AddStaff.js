import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function AddStaff({ route, navigation }) {
  const { staffList, setStaffList } = route.params;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [address, setAddress] = useState('');

  const handleAddStaff = () => {
    // Validate input fields
    if (!name || !phone || !department || !address) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    // Generate a new ID (replace this with your logic to generate unique IDs)
    const newId = staffList.length > 0 ? staffList[staffList.length - 1].id + 1 : 1;

    // Create a new staff member
    const newStaff = {
      id: newId,
      name,
      phone,
      department,
      address,
    };

    // Update the staffList state
    setStaffList((prevStaffList) => [...prevStaffList, newStaff]);

    // Navigate back to the ShowStaffList screen
    navigation.navigate('ShowStaffList', { staffList: [...staffList, newStaff] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Staff</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        onChangeText={(text) => setPhone(text)}
        value={phone}
      />
      <TextInput
        style={styles.input}
        placeholder="Department"
        onChangeText={(text) => setDepartment(text)}
        value={department}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        onChangeText={(text) => setAddress(text)}
        value={address}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddStaff}>
        <Text>Add Staff</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});
