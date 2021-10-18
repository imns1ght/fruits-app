import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Colors, FontSize } from '../styles'

const Input = ({
  value,
  setValue,
  title,
  placeholder,
  multiline,
  autoFocus,
  password,
}: {
  value: string
  setValue: (value: string) => void
  title?: string
  placeholder?: string
  multiline?: boolean
  autoFocus?: boolean
  password?: boolean
}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder={placeholder}
        keyboardType='default'
        multiline={multiline}
        autoFocus={autoFocus}
        secureTextEntry={password}
        clearButtonMode='always'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  title: {
    fontSize: FontSize.small,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.mediumGray,
    fontSize: FontSize.small,
    padding: 8,
    marginVertical: 10,
    color: Colors.black,
    backgroundColor: Colors.white,
  },
})

export default Input
