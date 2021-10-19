import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors, FontSize } from '~/styles'
import { Price } from '..'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ActionWithPriceButton = ({
  text,
  price,
  onPress,
}: {
  text: string
  price: number
  onPress: () => void
}) => (
  <TouchableOpacity style={styles.container} containerStyle={styles.container} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
    <Price price={price} style={styles.text} showPrefix />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 1,
    backgroundColor: Colors.green,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  text: {
    fontSize: FontSize.large,
    color: Colors.white,
  },
})

export default ActionWithPriceButton
