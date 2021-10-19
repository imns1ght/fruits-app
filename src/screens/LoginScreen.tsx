import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { editUser } from '~/actions'
import { FlatButton, Input } from '~/components'
import { useAppDispatch } from '~/hooks'
import { RootStackParamList } from '~/navigation/types'

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'CatalogScreen'>>()
  const [userState, setUserState] = React.useState('')
  const [passwordState, setPasswordState] = React.useState('')
  const dispatch = useAppDispatch()

  const handleSubmit = React.useCallback(() => {
    dispatch(editUser(userState))
    navigation.replace('CatalogScreen', 'CatalogScreen')
  }, [dispatch, navigation, userState])

  return (
    <View style={styles.mainContainer}>
      <View style={styles.formContainer}>
        <Input title='Username' value={userState} setValue={setUserState} />
        <Input title='Password' value={passwordState} setValue={setPasswordState} password />
        <View style={{ marginTop: 15, alignSelf: 'flex-end' }}>
          <FlatButton
            label='ENTER'
            disabled={!userState || !passwordState}
            onPress={handleSubmit}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'center',
  },
})

export default LoginScreen
