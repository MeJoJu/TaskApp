import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function StaffDetail({ route, navigation }) {
  const { staff, setStaffList } = route.params;

  const handleGoBack = () => {
    navigation.navigate('ShowStaffList');
  };

  const handleDeleteStaff = () => {
    setStaffList((prevStaffList) => prevStaffList.filter((s) => s.id !== staff.id));
  };

  const handleUpdateStaffInfo = () => {
    navigation.navigate('UpdateStaff', { staff, setStaffList });
  };

  useEffect(() => {
    // This effect will be triggered after the component has rendered
    // and the state has been updated
    navigation.setParams({ updated: true });
  }, [setStaffList, staff.id, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{staff.name}</Text>
      <Text>{`ID: ${staff.id}`}</Text>
      <Text>{`Phone: ${staff.phone}`}</Text>
      <Text>{`Department: ${staff.department}`}</Text>
      <Text>{`Address: ${staff.address}`}</Text>

      {/* Update button */}
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdateStaffInfo}>
        <Text>Update Staff Information</Text>
      </TouchableOpacity>

      {/* Delete button */}
      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteStaff}>
        <Text>Delete Staff</Text>
      </TouchableOpacity>

      {/* Back button */}
      <TouchableOpacity style={styles.button} onPress={handleGoBack}>
        <Text>Go Back to Staff List</Text>
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
  button: {
    marginTop: 16,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButton: {
    marginTop: 16,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  updateButton: {
    marginTop: 16,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});
