import { FlatList, ListRenderItem, View } from 'react-native'

type CarouselProps<ItemT> = {
  data: ItemT[]
  renderItem: ListRenderItem<ItemT>
  spaceEachItem: number
}

export const Carousel = <T,>({
  data,
  renderItem,
  spaceEachItem,
}: CarouselProps<T>) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      data={data}
      ItemSeparatorComponent={() => <View style={{ width: spaceEachItem }} />}
      renderItem={renderItem}
    ></FlatList>
  )
}
