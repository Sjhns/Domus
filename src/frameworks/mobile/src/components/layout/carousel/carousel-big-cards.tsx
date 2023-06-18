import { View, Text } from 'react-native'

import { Carousel } from '../../common/carousel'
import { properties } from '../data-fake'
import { BigCard } from './big-card'

export const CarouselBigCards = () => {
  return (
    <View>
      <View className="mt-5 mb-3">
        <Text className="text-xl font-medium">As escolhas mais procuradas</Text>
      </View>

      <Carousel
        data={properties}
        spaceEachItem={8}
        renderItem={({ item }) => <BigCard {...item} />}
      />
    </View>
  )
}
