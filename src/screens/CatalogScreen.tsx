import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { NavigationScreens } from '../navigation/types'

const CatalogScreen = () => {
  const navigation = useNavigation<StackNavigationProp<NavigationScreens, 'CatalogScreen'>>()

  return (
    <View>
      <Text>Catalog Screen</Text>
    </View>
  )
}

export default CatalogScreen
