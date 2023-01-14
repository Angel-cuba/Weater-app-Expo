import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const CustomButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.textField}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#388DE2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    elevation: 6,
  },
  textField: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase'
  }

  });