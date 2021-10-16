import React from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { NavigationScreens } from '~/navigation/types'

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<NavigationScreens, 'LoginScreen'>>()

  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title='Press me!'
        onPress={() => navigation.push('CatalogScreen', 'LoginScreen')}
      ></Button>
    </View>
  )
}

export default LoginScreen
