import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const CustomButton = ({ label, onPress, radius, fontSize, backgroundColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { borderRadius: radius, backgroundColor: backgroundColor || '#15AAF5' },
      ]}
    >
      <Text style={[styles.textField, { fontSize: fontSize }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 6,
  },
  textField: {
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
