import { View, ScrollView } from 'react-native'
import { BigImmobileCard } from '../components/layout/big-immobile-card'
import { SearchInput } from '../components/common/search-input'
import { Fragment } from 'react'

export const Favorite = () => {
  const id = ['1', '2', '3', '4']
  return (
    <View className="flex-1 pt-7 px-4 bg-base pb-24">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <SearchInput />

        <View className="h-7" />

        <View className="items-center justify-center">
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
        </View>
      </ScrollView>
    </View>
  )
}
