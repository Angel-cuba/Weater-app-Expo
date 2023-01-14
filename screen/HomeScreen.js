import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import CustomButton from '../components/Custom/CustomButton';

const HomeScreen = () => {
  const imageUrlFromCloudinary =
    'https://res.cloudinary.com/dqaerysgb/image/upload/v1673656213/Random/main_bg_mab3uj.jpg';
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: imageUrlFromCloudinary }} style={styles.imageBackground}>
        <View style={styles.cnter}>
          <Text style={{marginBottom: 100}}>Inside</Text>
          <Text>HomeScreen</Text>
            <CustomButton label="Create a new game"/>
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
  cnter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
