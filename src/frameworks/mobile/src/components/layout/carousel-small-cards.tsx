import { Text, View } from 'react-native'
import { Carousel } from '../common/carousel'
import { SmallCard } from './small-card'
import { properties } from './data-fake'

export const CarouselSmallCards = () => {
  return (
    <View className="">
      <View className="mb-2">
        <Text className="text-2xl font-normal">Os mais pertos de você</Text>
      </View>
      <Carousel
        data={properties}
        renderItem={({ item }) => <SmallCard {...item} />}
        spaceEachItem={11}
      />
    </View>
  )
}
