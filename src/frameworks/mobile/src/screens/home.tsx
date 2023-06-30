import { SafeAreaView, ScrollView, View } from 'react-native'

import { Header } from '../components/layout/header'
import { NearbyImmobileCarousel } from '../components/layout/carousel/nearby-immobile-carousel'
import { MostSearchedImmobileCarousel } from '../components/layout/carousel/most-searched-immobile-carousel'
import { ArticlesSection } from '../components/layout/articles-section'

export const Home = () => {
  return (
    <SafeAreaView className="flex-1 px-3 pt-3">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Header userCurrentLocation="Surabaya, Indonesia" />

        <NearbyImmobileCarousel key="nearby-carousel-1" />
        <MostSearchedImmobileCarousel key="most-searched-carousel-1" />
        <NearbyImmobileCarousel key="nearby-carousel-2" />
        <MostSearchedImmobileCarousel key="most-searched-carousel-2" />

        <ArticlesSection />

        <View className="mt-28" />
      </ScrollView>
    </SafeAreaView>
  )
}
