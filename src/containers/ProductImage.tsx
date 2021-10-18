/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import { StyleProp, ImageStyle, Image } from 'react-native'
import { Fruit } from '~/types'

const ProductImage = ({ name, imageStyle }: { name: Fruit; imageStyle: StyleProp<ImageStyle> }) => {
  switch (name) {
    case 'Apple':
      return <Image source={require('~/assets/images/apple.png')} style={imageStyle} />
    case 'Banana':
      return <Image source={require('~/assets/images/banana.png')} style={imageStyle} />
    case 'Mango':
      return <Image source={require('~/assets/images/mango.png')} style={imageStyle} />
    case 'Orange':
      return <Image source={require('~/assets/images/orange.png')} style={imageStyle} />
    case 'Pear':
      return <Image source={require('~/assets/images/pear.png')} style={imageStyle} />
    case 'Pineapple':
      return <Image source={require('~/assets/images/pineapple.png')} style={imageStyle} />
  }
}

export default ProductImage
