import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { useAppSelector } from '~/hooks'

import { CheckoutProductCard } from '~/containers/cards'
import { Order } from '~/types'
import { ActionWithPriceButton } from '~/components'

const CheckoutScreen = () => {
  const products = useAppSelector(state => state.orders.products)

  const totalPrice = React.useMemo(
    () => products.map(product => product.price * product.quantity).reduce((a, b) => a + b, 0),
    [products]
  )

  const renderProductCard = React.useCallback(
    (product: { item: Order }) => <CheckoutProductCard product={product.item} />,
    []
  )

  return (
    <View style={styles.mainContainer}>
      <FlatList data={products} renderItem={renderProductCard} />
      <View>
        <ActionWithPriceButton text='Checkout' price={totalPrice} onPress={() => {}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flexBasis: '100%',
  },
})

export default CheckoutScreen
