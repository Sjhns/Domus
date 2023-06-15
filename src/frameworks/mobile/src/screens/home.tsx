import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { CarouselSmallCards } from '../components/layout/carousel-small-cards'
import { CarouselBigCards } from '../components/layout/carousel-big-cards'
import { Header } from '../components/layout/header'

export const Home = () => {
  return (
    <SafeAreaView className="flex-1 px-3 pt-3 ">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Header />
        <CarouselSmallCards />
        <CarouselBigCards />
        <View className="mt-28" />
      </ScrollView>
    </SafeAreaView>
  )
}
