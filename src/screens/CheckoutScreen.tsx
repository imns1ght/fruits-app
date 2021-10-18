import React from 'react'
import { View, Text } from 'react-native'
import { useAppDispatch } from '~/hooks'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '~/navigation/types'
import { StackNavigationProp } from '@react-navigation/stack'

const CheckoutScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'CheckoutScreen'>>()
  const dispatch = useAppDispatch()

  return (
    <View>
      <Text>Checkout Screen</Text>
    </View>
  )
}

export default CheckoutScreen
