import { View, Text, StyleSheet, Modal } from 'react-native';
import React, { useContext } from 'react';
import CustomButton from './Custom/CustomButton';
import CustomInput from './Custom/CustomInput';
import { getData, token } from '../data/getCitiesData';
import City from './City';
import { DataContext } from '../context/DataContext';

const ModalScreen = ({ modalVisible, setModalVisible }) => {
  const [search, setSearch] = React.useState(null);

  const [cities, setCities] = React.useState(null);
  const { dataCities, setDataCities } = useContext(DataContext);
  // console.log('from modal', dataCities)

  React.useEffect(() => {
   if(search) {
     const timeOut = setTimeout(
      () =>
        getData(search, token).then((data) => {
          setCities(data.locations);
          setDataCities(data.locations);
        }),
      1000
    );
    return () => clearTimeout(timeOut);
   }
  }, [search]);

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Write your city name</Text>
            <CustomInput placeholder="Search" value={search} onChangeText={setSearch} />
            {!cities || search === '' ? <Text>No cities selected</Text> : <City cities={cities} />}
            <View style={styles.buttonPlusOnModal}>
              <CustomButton
                label="x"
                radius={40}
                onPress={() => setModalVisible(false)}
                fontSize={20}
                backgroundColor="#15F528"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
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
