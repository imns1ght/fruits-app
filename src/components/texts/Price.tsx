import React from 'react'
import NumberFormat from 'react-number-format'
import { StyleProp, TextStyle, Text } from 'react-native'

const Price = ({
  price,
  style,
  showPrefix,
  showSuffix,
}: {
  price: number
  style: StyleProp<TextStyle>
  showPrefix?: boolean
  showSuffix?: boolean
}) => {
  return (
    <NumberFormat
      value={price.toFixed(2)}
      thousandSeparator={true}
      prefix={showPrefix ? '$' : undefined}
      displayType={'text'}
      renderText={value => <Text style={style}>{value}</Text>}
      suffix={showSuffix ? '/kg' : undefined}
    />
  )
}

export default Price
