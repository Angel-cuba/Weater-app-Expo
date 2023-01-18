import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';

const CustomCity = ({ item, addToLocalStorage, setCityId }) => {
  const addCity = (id) => {
    setCityId(id);
    addToLocalStorage();
  };
  return (
    <View style={stylesCity.cityItem}>
      <Text style={stylesCity.cityName}>{item.name}</Text>
      <Text style={stylesCity.cityCountry}>{item.country}</Text>
      <Text style={stylesCity.cityAdmin}>{item.adminArea}</Text>
      <CustomButton
        onPress={() => addCity(item.id)}
        label="Add"
        radius={6}
        fontSize={12}
      />
    </View>
  );
};

export default CustomCity;

export const stylesCity = StyleSheet.create({
  cityItem: {
    minWidth: 250,
    backgroundColor: 'rgba(5,2,112,0.61)',
    padding: 10,
    margin: 3,
    borderRadius: 10,
  },
  cityName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cityCountry: {
    color: '#d3d3d3',
    alignSelf: 'center',
    fontSize: 15,
  },
  cityAdmin: {
    fontSize: 15,
    alignSelf: 'flex-end',
  },
});
