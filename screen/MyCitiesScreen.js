import { View, Text, StyleSheet, Pressable, Modal, Alert } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../components/Custom/CustomButton';

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

const ModalScreen = ({ modalVisible, setModalVisible, addCity }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <View style={styles.buttonPlusOnModal}>
              <CustomButton
                label="x"
                radius={40}
                onPress={() => setModalVisible(false)}
                fontSize={20}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
  buttonPlusOnModal: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  // Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.95)',
  },
  modalView: {
    width: '90%',
    height: '88%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
