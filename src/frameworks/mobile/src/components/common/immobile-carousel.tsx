import { FlatList, ListRenderItem, View } from 'react-native'

type ImmobileCarouselProps<ItemT> = {
  data: ItemT[]
  renderItem: ListRenderItem<ItemT>
  spaceEachItem: number
}

export const ImmobileCarousel = <T,>({
  data,
  renderItem,
  spaceEachItem,
}: ImmobileCarouselProps<T>) => {
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
