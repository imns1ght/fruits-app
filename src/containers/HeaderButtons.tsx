import React from 'react'
import { View, StyleSheet } from 'react-native'
import { CartButton } from '~/components'

const HeaderButtons = () => {
  return (
    <View style={styles.container}>
      <CartButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
})

export default HeaderButtons
