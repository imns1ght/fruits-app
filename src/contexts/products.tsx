import React from 'react'
import { FullProductInfo } from '~/types'

export const availableProducts: FullProductInfo[] = [
  {
    name: 'Apple',
    price: 4.55,
    description:
      'Apples are a popular fruit, containing antioxidants, vitamins, dietary fiber, and a range of other nutrients. Due to their varied nutrient content, they may help prevent several health conditions.',
  },
  {
    name: 'Banana',
    price: 1.5,
    description:
      'Bananas are one of the most popular fruits worldwide. They contain essential nutrients that can have a protective impact on health.',
  },
  {
    name: 'Mango',
    price: 1.45,
    description:
      'Mangoes are sweet, creamy fruits that have a range of possible health benefits. They are highly popular around the world.',
  },
  {
    name: 'Orange',
    price: 1.3,
    description:
      'Oranges are a type of low calorie, highly nutritious citrus fruit. As part of a healthful and varied diet, oranges contribute to strong, clear skin and can help lower a person’s risk of many conditions.',
  },
  {
    name: 'Pear',
    price: 5.9,
    description:
      'A pear is a mild, sweet fruit with a fibrous center. Pears are rich in essential antioxidants, plant compounds, and dietary fiber. They pack all of these nutrients in a fat free, cholesterol free, 100 calorie package.',
  },
  {
    name: 'Pineapple',
    price: 7,
    description: 'Pineapple is a tropical fruit available in  many homes around the world.',
  },
]

export const ProductsContext = React.createContext(availableProducts)
