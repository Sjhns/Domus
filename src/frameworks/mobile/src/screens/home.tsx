import { Text, View } from 'react-native'
import { Header } from '../components/layout/header'
import { BarOptions } from '../components/layout/bar-options'
import { CarouselImmobile } from '../components/layout/carousel-immobile'

export const Home = () => {
  return (
    <View className="flex-1 px-3 pt-3">
      <Header />
      <Text className="mt-[3px]">Vamos começar a explorar?</Text>
      <BarOptions />
      <CarouselImmobile />
    </View>
  )
}
