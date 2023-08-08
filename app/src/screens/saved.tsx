import { View, ScrollView, FlatList } from 'react-native'
import { SearchInput } from '../components/common/search-input'

import { HorizontalCard } from '../components/layout/card'
import { BlankSpace } from '../components/common/space-white'

export const Saved = () => {
  const id = ['1', '2', '3', '4']
  return (
    <View className="flex-1 pt-7 px-4 bg-base pb-24">
      <SearchInput />

      <BlankSpace size={30} />

      {/* <View className="items-center justify-center">
          {id.map((item) => (
            <Fragment key={item}>
              <BigImmobileCard
                key={item}
                title="Casa com 2 quartos e 1 banheiro"
                location="Rua das Margaridas, 100"
                price={1000}
                image="https://www.lopes.com.br/blog/wp-content/uploads/2017/06/interior-2400372_1920.jpg"
                rooms={2}
                squareMeters={100}
                period="Mês"
              />

              <View className="h-6" />
            </Fragment>
          ))}
        </View> */}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={id}
        renderItem={() => <HorizontalCard />}
        ItemSeparatorComponent={() => <BlankSpace size={17} />}
        // disableVirtualization={false}
      />
    </View>
  )
}
