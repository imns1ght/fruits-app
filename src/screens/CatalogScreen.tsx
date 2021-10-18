import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { CatalogProductCard } from '~/containers'
import { ProductInfo } from '~/types'
import { FlatList } from 'react-native-gesture-handler'
import { ProductsContext } from '~/contexts/products'
import { Input } from '~/components'
import { FontSize } from '~/styles'

const CatalogScreen = () => {
  const availableProducts = React.useContext(ProductsContext)
  const [search, setSearch] = React.useState('')

  const filteredProducts = React.useMemo(
    () =>
      search
        ? availableProducts.filter(product => product.name.toLowerCase().includes(search))
        : availableProducts,
    [search, availableProducts]
  )

  const renderProductCard = React.useCallback(
    (product: { item: ProductInfo }) => <CatalogProductCard product={product.item} />,
    []
  )

  const setSearchText = React.useCallback((value: string) => {
    setSearch(value.toLowerCase())
  }, [])

  return (
    <View style={styles.mainContainer}>
      <Input placeholder='Search...' value={search} setValue={setSearchText} />
      {filteredProducts.length === 0 ? (
        <Text style={styles.notFoundText}>We didn&apos;t find any results. :(</Text>
      ) : (
        <FlatList data={filteredProducts} renderItem={renderProductCard} numColumns={2} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  notFoundText: {
    fontSize: FontSize.extraLarge,
  },
})

export default CatalogScreen
