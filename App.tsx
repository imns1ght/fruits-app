import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { Provider } from 'react-redux'

import { BackButton } from '~/components'
import { HeaderButtons } from '~/containers'
import { availableProducts, ProductsContext } from '~/contexts'
import { RootStackParamList } from '~/navigation/types'
import { store } from '~/redux/store'
import { CatalogScreen, CheckoutScreen, LoginScreen, ProductScreen } from '~/screens'
import { Colors } from '~/styles'

const Stack = createStackNavigator<RootStackParamList>()

const navigationOptions: StackNavigationOptions = {
  headerShown: true,
  headerRight: () => <HeaderButtons />,
  headerStyle: { backgroundColor: Colors.green },
  headerBackImage: () => <BackButton />,
  headerTitleStyle: { color: Colors.white },
}

const App = () => (
  <Provider store={store}>
    <ProductsContext.Provider value={availableProducts}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={navigationOptions} initialRouteName='LoginScreen'>
          <Stack.Screen
            name='LoginScreen'
            component={LoginScreen}
            options={{
              title: 'Welcome to the Fruit Store!',
              headerRight: undefined,
            }}
          />
          <Stack.Screen
            name='CatalogScreen'
            component={CatalogScreen}
            options={{
              title: 'Store',
            }}
          />
          <Stack.Screen
            name='ProductScreen'
            component={ProductScreen}
            options={({ route }) => ({
              title: route.params.name,
              headerTitleStyle: { color: 'transparent' },
            })}
          />
          <Stack.Screen
            name='CheckoutScreen'
            component={CheckoutScreen}
            options={{ title: 'Your cart', headerRight: undefined }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductsContext.Provider>
  </Provider>
)

export default App
