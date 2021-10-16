import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { NavigationScreens } from './src/navigation/types'
import { LoginScreen, CatalogScreen, CheckoutScreen } from './src'

// type Screen2Props = NativeStackScreenProps<RootParamList, 'Screen2'>

// const Screen2 = ({ route }: Screen2Props) => {
//   return <Text>{route.params.paramA}</Text>
// }

const Root = createStackNavigator<NavigationScreens>()
const options: StackNavigationOptions = {
  headerShown: false,
}

const App = () => {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={options} initialRouteName='LoginScreen'>
        <Root.Screen name='LoginScreen' component={LoginScreen} />
        <Root.Screen name='CatalogScreen' component={CatalogScreen} />
        <Root.Screen name='CheckoutScreen' component={CheckoutScreen} />
      </Root.Navigator>
    </NavigationContainer>
  )
}

export default App
