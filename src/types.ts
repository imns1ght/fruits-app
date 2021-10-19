export type Fruit = 'Apple' | 'Banana' | 'Mango' | 'Orange' | 'Pear' | 'Pineapple'

export type BaseProductInfo = {
  name: Fruit
  price: number
}

export type FullProductInfo = BaseProductInfo & {
  description: string
}

export type Order = {
  name: Fruit
  price: number
  quantity: number
}
