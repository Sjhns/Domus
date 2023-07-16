import { ScrollView, View } from 'react-native'

import { Header } from '../components/layout/header'
import { NearbyCarousel } from '../components/layout/carousel/nearby-immobile-carousel'
import { MostSearchedCarousel } from '../components/layout/carousel/most-searched-immobile-carousel'
import { ArticlesSection } from '../components/layout/articles-section'
import { PresentationCard } from '../components/layout/presentation-card'

export const Home = () => {
  return (
    <View className="flex-1 px-3 pt-3">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Header userCurrentLocation="Surabaya, Indonesia" />

        <NearbyCarousel key="nearby-carousel-1" />
        <MostSearchedCarousel key="most-searched-carousel-1" />
        <NearbyCarousel key="nearby-carousel-2" />
        <MostSearchedCarousel key="most-searched-carousel-2" />

        <ArticlesSection />

        <PresentationCard />
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  )
}
