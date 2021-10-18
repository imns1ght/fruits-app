import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '~/styles'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '~/navigation/types'

const CartButton = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'CheckoutScreen'>>()

  const onPress = React.useCallback(() => {
    navigation.push('CheckoutScreen', 'CheckoutScreen')
  }, [navigation])

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon key='cart-outline' name='cart-outline' color={Colors.white} size={28} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
})

export default CartButton
