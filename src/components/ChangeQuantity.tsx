import React from 'react'
import { Colors, FontSize } from '~/styles'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ChangeQuantity = ({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: {
  quantity: number
  increaseQuantity: () => void
  decreaseQuantity: () => void
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
      <Icon name='minus' size={FontSize.extraLarge} color={Colors.green} />
    </TouchableOpacity>
    <Text style={styles.quantityText}>{quantity}</Text>
    <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
      <Icon name='plus' size={FontSize.extraLarge} color={Colors.green} />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
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
})

export default ChangeQuantity
