import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '~/styles'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '~/navigation/types'

const HomeButton = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'CatalogScreen'>>()

  const onPress = React.useCallback(() => {
    navigation.navigate('CatalogScreen', 'CatalogScreen')
  }, [navigation])

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon key='home' name='home' color={Colors.white} size={28} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
})

export default HomeButton
