import React from 'react';
import { Alert, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomAlert = ({ title, message, onConfirm, onCancel }) => {
  return (
    <View style={styles.alertContainer}>
      <View style={styles.alertContent}>
        <Text style={styles.alertTitle}>{title}</Text>
        <Text style={styles.alertMessage}>{message}</Text>
        <TouchableOpacity onPress={onConfirm}>
          <Text style={styles.alertButton}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCancel}>
          <Text style={styles.alertButton}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  alertMessage: {
    fontSize: 16,
    marginBottom: 20,
  },
  alertButton: {
    fontSize: 16,
    color: 'blue',
    marginTop: 10,
  },
});

export default CustomAlert;
