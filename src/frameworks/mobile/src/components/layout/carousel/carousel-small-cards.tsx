import { View } from 'react-native'
import { Carousel } from '../../common/carousel'
import { SmallCard } from './small-card'
import { properties } from '../data-fake'
import { Title } from '../../common/title'

export const CarouselSmallCards = () => {
  return (
    <View className="mt-6">
      <View className="mb-2">
        <Title title="Os mais perto de você" />
      </View>
      <Carousel
        data={properties}
        renderItem={({ item }) => <SmallCard {...item} />}
        spaceEachItem={7}
      />
    </View>
  )
}
