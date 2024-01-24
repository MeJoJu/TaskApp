// SearchStaff.js
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function SearchStaff({ navigation, route }) {
  const { staffList, setStaffList } = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStaff, setFilteredStaff] = useState([]);

  const handleSearch = () => {
    // Filter staff based on the search query
    const filtered = staffList.filter((staff) =>
      staff.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredStaff(filtered);

    if (filtered.length === 0) {
      // Display an alert if no matching staff is found
      alert('Staff Not Found', `No staff with the name "${searchQuery}" found.`);
    }
  };

  const navigateToDetail = (item) => {
    navigation.navigate('StaffDetail', { staff: item, staffList, setStaffList });
  };

  const goBackToShowStaffList = () => {
    navigation.navigate('ShowStaffList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search Staff</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Enter staff name"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text>Search</Text>
      </TouchableOpacity>
      <FlatList
        data={filteredStaff}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToDetail(item)}>
            <Text style={styles.staffName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      
      {/* Button to go back to ShowStaffList */}
      <TouchableOpacity style={styles.backButton} onPress={goBackToShowStaffList}>
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
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  searchButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  staffName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  backButton: {
    marginTop: 16,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});
