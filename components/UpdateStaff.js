import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function UpdateStaff({ route, navigation }) {
  const { staff, setStaffList } = route.params;
  const [updatedStaff, setUpdatedStaff] = useState({ ...staff });

  const handleUpdate = () => {
    // Implement your logic to update staff details in the staff list
    // Here, we're updating all staff details including the ID
    setStaffList((prevStaffList) =>
      prevStaffList.map((s) => (s.id === staff.id ? { ...s, ...updatedStaff } : s))
    );

    // Show a success message
    Alert.alert('Success', 'Staff details updated successfully');

    // Navigate back to the StaffDetail screen
    navigation.navigate('StaffDetail', { staff: { ...staff, ...updatedStaff }, setStaffList });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Update Staff</Text>
      <Text>staff name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter updated staff name"
        value={updatedStaff.name}
        onChangeText={(text) => setUpdatedStaff({ ...updatedStaff, name: text })}
      />
      <Text>staff phone</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter updated staff phone"
        value={updatedStaff.phone}
        onChangeText={(text) => setUpdatedStaff({ ...updatedStaff, phone: text })}
      />
      <Text>staff department</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter updated staff department"
        value={updatedStaff.department}
        onChangeText={(text) => setUpdatedStaff({ ...updatedStaff, department: text })}
      />
      <Text>staff address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter updated staff address"
        value={updatedStaff.address}
        onChangeText={(text) => setUpdatedStaff({ ...updatedStaff, address: text })}
      />
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
        <Text>Update</Text>
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
    padding: 8,
  },
  updateButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});
