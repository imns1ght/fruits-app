import React from 'react'
import { SafeAreaView, ScrollView, StatusBar } from 'react-native'

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior='automatic'></ScrollView>
    </SafeAreaView>
  )
}

export default App
