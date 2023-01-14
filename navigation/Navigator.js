import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../screen/HomeScreen';
import MyCitiesScreen from '../screen/MyCitiesScreen';
import SearchScreen from '../screen/SearchScreen';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="MyCities"
          component={MyCitiesScreen}
          options={{
            title: 'My Cities',
            headerStyle: {
              backgroundColor: '#C1EEFB',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackTitleVisible: false,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen name="Search" component={SearchScreen} options={{
          title: 'Search your city',
          headerStyle: {
            backgroundColor: '#C1EEFB',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
