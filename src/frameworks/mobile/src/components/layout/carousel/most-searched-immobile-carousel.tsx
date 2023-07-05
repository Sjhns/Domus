import { View } from 'react-native'

import { Carousel } from '../../common/immobile-carousel'
import { properties } from '../data-fake'
import { BigImmobileCard } from './big-immobile-card'
import { CarouselTitle } from '../../common/carousel-title'

export const MostSearchedCarousel = () => {
  return (
    <View className="mt-6">
      <View className="mb-2">
        <CarouselTitle title="Os mais procurados" />
      </View>

      <Carousel
        data={properties}
        spaceEachItem={8}
        renderItem={({ item }) => <BigImmobileCard {...item} />}
      />
    </View>
  )
}
