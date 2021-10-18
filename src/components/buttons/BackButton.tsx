import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Colors } from '~/styles'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '~/navigation/types'

const BackButton = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'ProductScreen'>>()

  const onPress = React.useCallback(() => {
    navigation.pop()
  }, [navigation])

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon key='arrow-back' name='arrow-back' color={Colors.white} size={28} />
    </TouchableOpacity>
  )
}

export default BackButton
