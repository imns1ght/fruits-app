import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { NavigationScreens } from '../navigation/types'

const CheckoutScreen = () => {
  const navigation = useNavigation<StackNavigationProp<NavigationScreens, 'CheckoutScreen'>>()

  return (
    <View>
      <Text>Checkout Screen</Text>
    </View>
  )
}

export default CheckoutScreen
