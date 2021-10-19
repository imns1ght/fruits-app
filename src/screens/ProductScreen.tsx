import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ProductImage, AddProductBar } from '~/containers'
import { useRoute, RouteProp } from '@react-navigation/native'

import { RootStackParamList } from '~/navigation/types'
import { FontSize, Colors } from '~/styles'
import { Price } from '~/components'

const ProductScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'ProductScreen'>>()
  const { name, price, description } = params

  return (
    <View style={styles.container}>
      <ProductImage name={name} imageStyle={styles.image} />
      <View style={styles.column}>
        <Text style={styles.name}>{name}</Text>
        <Price price={price} style={styles.price} showPrefix showSuffix />
      </View>
      <Text style={styles.description}>{description}</Text>
      <AddProductBar product={{ name, price }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  image: {
    width: '80%',
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  column: {
    paddingVertical: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  name: {
    fontSize: FontSize.extraLarge,
    color: Colors.green,
    fontWeight: 'bold',
    marginRight: 10,
  },
  price: {
    paddingTop: 5,
    fontSize: FontSize.medium,
    color: Colors.darkGray,
  },
  description: {
    fontSize: FontSize.medium,
    flexGrow: 1,
  },
})

export default ProductScreen
