import { Text, View } from 'react-native'
import { Header } from '../components/layout/header'
import { BarOptions } from '../components/layout/bar-options'

export const Home = () => {
  return (
    <View className="flex-1 px-3 pt-3">
      <Header />
      <Text>Vamos começar a explorar?!</Text>
      <BarOptions />
    </View>
  )
}
