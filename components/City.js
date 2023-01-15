import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

const City = ({ cities }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      {cities.map((city) => {
        return (
          <View key={city.id} style={styles.cityItem}>
            <Text style={styles.cityName}>{city.name}</Text>
            <Text style={styles.cityCountry}>{city.country}</Text>
            <Text style={styles.cityAdmin}>{city.adminArea}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default City;

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.0261)',
    borderRadius: 10,
  },
  cityItem: {
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
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 15,
  },
  cityAdmin: {
    fontSize: 15,
    alignSelf: 'flex-end',
  },


  })
