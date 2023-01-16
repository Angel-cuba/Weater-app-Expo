import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomCity from './Custom/CustomCity';

const City = ({ cities }) => {
  const [cityId, setCityId] = React.useState(null);

  const citiesToKeep = cities.map((c) => {
    return {
      id: c.id,
      name: c.name,
      country: c.country,
      adminArea: c.adminArea,
    };
  });
  console.log('citiesToKeep', citiesToKeep);
  const filteredCities = citiesToKeep.filter((c) => c.id === cityId);
  console.log('filteredCities', filteredCities);

  const addToLocalStorage = async () => {
    const myCities = JSON.parse(await AsyncStorage.getItem('citiesToKeep')) || [];
    myCities.push(filteredCities);
    await AsyncStorage.setItem('citiesToKeep', JSON.stringify(myCities));
    console.log('id', cityId);
  };
  React.useEffect(() => {
    addToLocalStorage();
  }, [cityId]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      {cities.map((item) => {
        return (
          <CustomCity
            key={item.id}
            item={item}
            addToLocalStorage={addToLocalStorage}
            setCityId={setCityId}
          />
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
});
