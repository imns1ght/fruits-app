import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Card, Price, ChangeQuantity } from '~/components'
import { Colors, FontSize } from '~/styles'
import { Order } from '~/types'
import { ProductImage } from '~/containers'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '~/navigation/types'
import { useAppDispatch, useAppSelector } from '~/hooks'
import { addProduct, removeProduct } from '~/actions'

const CheckoutProductCard = ({ product }: { product: Order }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'CheckoutScreen'>>()
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.orders)

  const increaseQuantity = React.useCallback(
    () => dispatch(addProduct({ name: product.name, price: product.price, quantity: 1 })),
    [dispatch, product.name, product.price]
  )

  const decreaseQuantity = React.useCallback(
    () => dispatch(removeProduct(product.name)),
    [dispatch, product.name]
  )

  return (
    <Card>
      <View style={styles.mainContainer}>
        <ProductImage name={product.name} imageStyle={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Price price={product.price * product.quantity} style={styles.price} showPrefix />
        </View>
        <View>
          <ChangeQuantity
            quantity={product.quantity}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
          />
        </View>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  mainContainer: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  infoContainer: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  name: {
    fontSize: FontSize.large,
    fontWeight: 'bold',
    color: Colors.green,
  },
  price: {
    fontSize: FontSize.medium,
    color: Colors.darkGray,
    marginVertical: 2,
  },
})

export default CheckoutProductCard
