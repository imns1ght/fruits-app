import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { addProduct } from '~/actions'
import { ChangeQuantity, ActionWithPriceButton } from '~/components'
import { useAppDispatch } from '~/hooks'
import { RootStackParamList } from '~/navigation/types'
import { Colors } from '~/styles'
import { BaseProductInfo } from '~/types'

const AddProductBar = ({ product }: { product: BaseProductInfo }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'ProductScreen'>>()
  const dispatch = useAppDispatch()

  const [quantity, setQuantity] = React.useState(0)

  const totalValue = React.useMemo(() => product.price * quantity, [product.price, quantity])

  const increaseQuantity = React.useCallback(() => setQuantity(quantity + 1), [quantity])

  const decreaseQuantity = React.useCallback(() => {
    if (quantity > 0) setQuantity(quantity - 1)
  }, [quantity])

  const addProductToOrder = React.useCallback(() => {
    if (quantity > 0) {
      dispatch(addProduct({ name: product.name, price: product.price, quantity }))
      setQuantity(0)
      navigation.push('CheckoutScreen', 'CheckoutScreen')
    }
  }, [dispatch, navigation, product.name, product.price, quantity])

  return (
    <View style={styles.container}>
      <ActionWithPriceButton text='Add' price={totalValue} onPress={addProductToOrder} />
      <ChangeQuantity
        quantity={quantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: Colors.green,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'space-between',
  },
})

export default AddProductBar
