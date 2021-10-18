import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Colors } from '../../styles'

const FlatButton = ({
  onPress,
  label,
  disabled,
}: {
  onPress: () => Promise<void> | void
  label: string
  disabled?: boolean
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: disabled ? Colors.darkGray : Colors.green,
        borderColor: disabled ? Colors.darkGray : Colors.green,
      }}
      disabled={disabled}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
  },
  label: {
    fontWeight: '700',
    color: Colors.white,
    marginHorizontal: 15,
  },
})

export default FlatButton
