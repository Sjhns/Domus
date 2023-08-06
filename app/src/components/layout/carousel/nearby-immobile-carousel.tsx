import { View } from 'react-native'

import { Carousel } from '../../common/immobile-carousel'
import { SmallImmobileCard } from './small-immobile-card'
import { properties } from '../../../mocks/data-fake'
import { CarouselTitle } from '../../common/carousel-title'

export const NearbyCarousel = () => {
  return (
    <View className="mt-6">
      <View className="mb-2">
        <CarouselTitle title="Os mais perto de você" />
      </View>
      <Carousel
        data={properties}
        renderItem={({ item }) => <SmallImmobileCard {...item} />}
        spaceEachItem={7}
      />
    </View>
  )
}
