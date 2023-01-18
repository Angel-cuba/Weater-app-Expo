import { View, Text, StyleSheet, Pressable, Modal, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../components/Custom/CustomButton';
import ModalScreen from '../components/Modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { stylesCity } from '../components/Custom/CustomCity';

const MyCitiesScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [citiesFromStorage, setCitiesFromStorage] = useState(null);

  const addCity = () => {
    setModalVisible(!modalVisible);
  };

  const removeAllCities = () => {
    AsyncStorage.removeItem('citiesToKeep');
    setCitiesFromStorage(null);
  };

  const deleteAllCities = () => {
    Alert.alert(
      'Delete all cities',
      'Are you sure you want to delete all cities?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            removeAllCities();
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };
  const getCitiesFromStorage = async () => {
    const myCities = JSON.parse(await AsyncStorage.getItem('citiesToKeep')) || [];
    setCitiesFromStorage(myCities);
  };
  const showId = (id) => {
    console.log('id', id);
  };
  React.useEffect(() => {
    getCitiesFromStorage();
  }, [modalVisible]);

  return (
    <View style={styles.container}>
      <Text>
        {citiesFromStorage || !!citiesFromStorage?.length ? 'All would shown here' : 'Nice choose'}-{' '}
        {citiesFromStorage?.length}
      </Text>
      <ScrollView showsVerticalScrollIndicator={false} style={stylesCity.scroll}>
        {citiesFromStorage &&
          citiesFromStorage?.map((item) =>
            item?.map((i) => {
              return (
                <Pressable
                  key={i?.id}
                  style={stylesCity.cityItem}
                  onPress={() => navigation.navigate('City', { city: i })}
                >
                  <Text style={stylesCity.cityName}>{i?.name}</Text>
                  <Text style={stylesCity.cityCountry}>{i?.country}</Text>
                  <Text style={stylesCity.cityAdmin}>{i?.adminArea}</Text>
                </Pressable>
              );
            })
          )}
      </ScrollView> 
      {modalVisible && (
        <ModalScreen modalVisible={modalVisible} setModalVisible={setModalVisible} />
      )}
      <View style={styles.buttonPlus}>
        <CustomButton
          label="+"
          radius={40}
          onPress={addCity}
          fontSize={20}
          backgroundColor="#15F528"
        />
      </View>
      {citiesFromStorage &&
        citiesFromStorage?.length !== 'undefined' &&
        !!citiesFromStorage?.length && (
          <View style={styles.buttonLess}>
            <CustomButton
              label="Delete all"
              radius={10}
              onPress={deleteAllCities}
              fontSize={20}
              backgroundColor="#F42707"
            />
          </View>
        )}
    </View>
  );
};

export default MyCitiesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1EEFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPlus: {
    position: 'absolute',
    bottom: 70,
    right: 40,
  },
  buttonLess: {
    position: 'absolute',
    bottom: 70,
    left: 40,
  },
});
