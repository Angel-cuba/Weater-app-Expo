import { View, Text, StyleSheet, Pressable, Modal, Alert } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../components/Custom/CustomButton';
import ModalScreen from '../components/Modal';

const MyCitiesScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const addCity = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      <Text>AddCityScreen</Text>
      {modalVisible && (
        <ModalScreen modalVisible={modalVisible} setModalVisible={setModalVisible} />
      )}
      <View style={styles.buttonPlus}>
        <CustomButton label="+" radius={40} onPress={addCity} fontSize={20} />
      </View>
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
});
