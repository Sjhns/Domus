import { View } from 'react-native'

import { Carousel } from '../../common/carousel'
import { properties } from '../data-fake'
import { BigCard } from './big-card'
import { Title } from '../../common/title'

export const CarouselBigCards = () => {
  return (
    <View className="mt-6">
      <View className="mb-2">
        <Title title="Os mais procurados" />
      </View>

      <Carousel
        data={properties}
        spaceEachItem={8}
        renderItem={({ item }) => <BigCard {...item} />}
      />
    </View>
  )
}
