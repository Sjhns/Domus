import { View, Text, ScrollView, FlatList } from 'react-native'
import { SearchInput } from '../components/common/search-input'
import { BlankSpace } from '../components/common/space-white'
import { Image } from '../components/common/image'

const url =
  'https://images.unsplash.com/photo-1551878736-72273e51025c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMHRyaXB8ZW58MHx8MHx8fDA%3D&w=1000&q=80'

export const Explore = () => {
  const id = [1, 2, 3, 4, 5]
  return (
    <View className="flex-1 px-3 pt-7 bg-base pb-24">
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchInput placeholder="Pesquise endereço, cidade, localização" />

        <BlankSpace size={23} />

        <Text className="text-[#1A1E25] tracking-[0.234px] font-semibold text-lg">
          Encontre aqui sua próxima viagem
        </Text>
        <BlankSpace size={10} />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={id}
          ItemSeparatorComponent={() => <BlankSpace size={15} />}
          renderItem={() => <SmallCard />}
        ></FlatList>

        <BlankSpace size={28} />

        <Text className="text-[#1A1E25] tracking-[0.234px] font-semibold text-lg">
          Explorando sobre o seu estilo de vida?
        </Text>
        <BlankSpace size={10} />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={id}
          ItemSeparatorComponent={() => <BlankSpace size={15} />}
          renderItem={() => <SmallCard />}
        ></FlatList>

        <BlankSpace size={28} />

        <Text className="text-[#1A1E25] tracking-[0.234px] font-semibold text-lg">
          Quer descobrir outras experiências?
        </Text>
        <BlankSpace size={10} />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={id}
          ItemSeparatorComponent={() => <BlankSpace size={15} />}
          renderItem={() => <SmallCard />}
        ></FlatList>
      </ScrollView>
    </View>
  )
}

const SmallCard = () => {
  return (
    <View
      className="w-48 h-64 bf-white  rounded-lg overflow-hidden shadow-lg 
    border border-[#a4a1a13f]"
    >
      <View className="flex-1">
        <Image source={url} />
      </View>
      <View className="flex-row items-center justify-center py-3">
        <Text className="text-[#1A1E25] tracking-[0.234px] font-semibold text-lg">
          Destinos populares
        </Text>
      </View>
    </View>
  )
}
