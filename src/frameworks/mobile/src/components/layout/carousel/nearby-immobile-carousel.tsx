import { View } from 'react-native'

import { ImmobileCarousel } from '../../common/immobile-carousel'
import { SmallImmobileCard } from './small-immobile-card'
import { properties } from '../data-fake'
import { CarouselTitle } from '../../common/carousel-title'

export const NearbyImmobileCarousel = () => {
  return (
    <View className="mt-6">
      <View className="mb-2">
        <CarouselTitle title="Os mais perto de você" />
      </View>
      <ImmobileCarousel
        data={properties}
        renderItem={({ item }) => <SmallImmobileCard {...item} />}
        spaceEachItem={7}
      />
    </View>
  )
}
