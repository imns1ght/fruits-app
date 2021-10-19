import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { Card } from '~/components'
import { RootStackParamList } from '~/navigation/types'
import { Colors, FontSize } from '~/styles'
import { BaseProductInfo } from '~/types'
import ProductImage from '../ProductImage'
import { Price } from '~/components'

const CatalogProductCard = ({ product }: { product: BaseProductInfo }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'ProductScreen'>>()

  const onPress = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    () => navigation.push('ProductScreen', product),
    [navigation, product]
  )

  return (
    <Card>
      <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
        <ProductImage name={product.name} imageStyle={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Price price={product.price} style={styles.price} showPrefix showSuffix />
        </View>
      </TouchableOpacity>
    </Card>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '80%',
    height: 150,
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

export default CatalogProductCard
