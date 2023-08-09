import { View, ScrollView, FlatList } from 'react-native'
import { Header } from '../components/layout/header'
import { BlankSpace } from '../components/common/space-white'
import { HorizontalCard } from '../components/layout/card'
import { CarouselTitle } from '../components/common/carousel-title'
import { ArticlesSection } from '../components/layout/articles-section'
import { PresentationCard } from '../components/common/presentation-card'

export const Home = () => {
  const id = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <View className="flex-1 px-3 pb-24 bg-base">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Header userCurrentLocation="Surabaya, Indonesia" />

        <BlankSpace size={30} />

        <CarouselTitle title="Os mais perto de você" />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={id}
          ItemSeparatorComponent={() => <BlankSpace size={15} />}
          renderItem={() => <HorizontalCard />}
        ></FlatList>

        <BlankSpace size={30} />

        <CarouselTitle title="Os mais baratos" />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={id}
          ItemSeparatorComponent={() => <BlankSpace size={15} />}
          renderItem={() => <HorizontalCard />}
        ></FlatList>

        <BlankSpace size={30} />

        <CarouselTitle title="Os mais caros" />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={id}
          ItemSeparatorComponent={() => <BlankSpace size={15} />}
          renderItem={() => <HorizontalCard />}
        ></FlatList>

        <BlankSpace size={30} />

        <ArticlesSection />

        <BlankSpace size={10} />

        <PresentationCard />

        <BlankSpace size={20} />
      </ScrollView>
    </View>
  )
}
