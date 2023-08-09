import { View, FlatList } from 'react-native'
import { SearchInput } from '../components/common/search-input'

import { HorizontalCard } from '../components/layout/card'
import { BlankSpace } from '../components/common/space-white'

export const Saved = () => {
  const id = ['1', '2', '3', '4']

  return (
    <View className="flex-1 pt-7 px-3 bg-base pb-24">
      <SearchInput />

      <BlankSpace size={15} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={id}
        renderItem={() => <HorizontalCard />}
        className="last:mb-20"
        ItemSeparatorComponent={() => <BlankSpace size={10} />}
      />
    </View>
  )
}
