import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Card, Price } from '~/components'
import { Colors, FontSize } from '~/styles'
import { ProductInfo } from '~/types'
import { ProductImage } from '~/containers'

const CheckoutProductCard = ({ product }: { product: ProductInfo }) => {
  return (
    <Card>
      <View style={styles.mainContainer}>
        <ProductImage name={product.name} imageStyle={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Price price={product.price} style={styles.price} showPrefix showSuffix />
        </View>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  mainContainer: { flexDirection: 'row' },
  image: {
    width: '40%',
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    paddingVertical: 10,
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
