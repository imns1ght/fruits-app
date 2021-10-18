export type Fruit = 'Apple' | 'Banana' | 'Mango' | 'Orange' | 'Pear' | 'Pineapple'

export type ProductInfo = {
  name: Fruit
  price: number
  description: string
}

export type Order = {
  name: Fruit
  quantity: number
}
