import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Colors } from '~/styles'

const Card = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.container}>{children}</View>
)

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: '50%',
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginVertical: 3,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
})

export default Card
