import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import React from 'react';
import CustomButton from '../components/Custom/CustomButton';

const HomeScreen = ({ navigation }) => {
  const imageUrlFromCloudinary =
    'https://res.cloudinary.com/dqaerysgb/image/upload/v1673656213/Random/main_bg_mab3uj.jpg';
  const imageUrlFromCloudinaryFlutter =
    'https://res.cloudinary.com/dqaerysgb/image/upload/v1673267854/Github/flutter-no-bg_rfrxng.png';
  const goTo = () => {
    navigation.navigate('MyCities');
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: imageUrlFromCloudinary }} style={styles.imageBackground}>
        <View style={styles.center}>
          <Image
            source={{ uri: imageUrlFromCloudinaryFlutter }}
            style={styles.imageUrlFromCloudinaryFlutter}
          />
          <Text style={styles.middle}>Inside</Text>
          <Text style={styles.weather}>{`Welcome to\n my weather station`}</Text>
          <CustomButton label="Let's go..."radius={10} onPress={goTo} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  imageUrlFromCloudinaryFlutter: {
    width: 150,
    height: 150,
  },
  middle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'left',
    marginLeft: 20,
    textTransform: 'uppercase',
  },
  weather: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: '20%',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
