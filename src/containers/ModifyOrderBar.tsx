import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { addProduct } from '~/actions'
import { Price } from '~/components'
import { ProductsContext } from '~/contexts'
import { useAppDispatch } from '~/hooks'
import { RootStackParamList } from '~/navigation/types'
import { Colors, FontSize } from '~/styles'
import { Fruit } from '~/types'

const ModifyOrderBar = ({ productName }: { productName: Fruit }) => {
  const productsContext = React.useContext(ProductsContext)
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'ProductScreen'>>()
  const dispatch = useAppDispatch()

  const [quantity, setQuantity] = React.useState(0)

  const totalValue = React.useMemo(() => {
    const productInfo = productsContext.find(product => product.name === productName)
    if (productInfo) return productInfo.price * quantity
    else return 0
  }, [productName, productsContext, quantity])

  const increaseQuantity = React.useCallback(() => setQuantity(quantity + 1), [quantity])

  const decreaseQuantity = React.useCallback(() => {
    if (quantity > 0) setQuantity(quantity - 1)
  }, [quantity])

  const addProductToOrder = React.useCallback(() => {
    if (quantity > 0) {
      dispatch(addProduct({ name: productName, quantity }))
      setQuantity(0)
      navigation.push('CheckoutScreen', 'CheckoutScreen')
    }
  }, [dispatch, navigation, productName, quantity])

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        containerStyle={styles.addButton}
        onPress={addProductToOrder}
        disabled={quantity === 0}
      >
        <Text style={styles.addButtonText}>Add</Text>
        <Price price={totalValue} style={styles.addButtonText} showPrefix />
      </TouchableOpacity>
      <View style={styles.quantityButtonsContainer}>
        <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
          <Icon name='minus' size={FontSize.extraLarge} color={Colors.green} />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
          <Icon name='plus' size={FontSize.extraLarge} color={Colors.green} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: Colors.green,
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  quantityButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  quantityText: {
    fontSize: FontSize.medium,
  },
  quantityButton: {
    padding: 10,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 1,
    backgroundColor: Colors.green,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  addButtonText: {
    fontSize: FontSize.large,
    color: Colors.white,
  },
})

export default ModifyOrderBar
