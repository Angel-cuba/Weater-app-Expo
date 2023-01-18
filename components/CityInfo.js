import { View, Text } from 'react-native'
import React from 'react'

const CityInfo = ({route}) => {
  console.log('route from city information', route);
  console.log('route from city', route.params)
  const {city} = route.params
  console.log('city for information', city)
  return (
    <View>
      <Text>{city.name}</Text>
      <Text>{city.country}</Text>
      <Text>{city.adminArea}</Text>
    </View>
  )
}

export default CityInfo
