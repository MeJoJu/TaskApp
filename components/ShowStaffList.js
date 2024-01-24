// ShowStaffList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function ShowStaffList({ navigation, route }) {
  const { staffList, setStaffList } = route.params;

  const navigateToDetail = (item) => {
    navigation.navigate('StaffDetail', { staff: item, staffList, setStaffList });
  };

  const handleAddStaff = () => {
    // Navigate to the AddStaff screen
    navigation.navigate('AddStaff');
  };

  

  const handleSearchStaff = () => {
    // Navigate to the SearchStaff screen
    navigation.navigate('SearchStaff', { staffList, setStaffList });
  };

  const handleUpdateStaff = (item) => {
    // Navigate to the UpdateStaff screen
    navigation.navigate('UpdateStaff', { staff: item, setStaffList });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Staff List</Text>
      <FlatList
        data={staffList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToDetail(item)}>
            <Text style={styles.staffName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Buttons for actions */}
      <TouchableOpacity style={styles.button} onPress={handleAddStaff}>
        <Text>Add Staff</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={handleSearchStaff}>
        <Text>Search Staff</Text>
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
  staffName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});
