import { View, Text, ScrollView } from 'react-native'
import { SearchInput } from '../components/common/search-input'
import { BlankSpace } from '../components/common/space-white'

export const Explore = () => {
  return (
    <View className="flex-1 px-3 pt-6 bg-base">
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchInput />

        <BlankSpace size={28} />

        <Text className="text-[#1A1E25] tracking-[0.234px] font-semibold text-lg">
          Encontre aqui sua próxima viagem
        </Text>
        <BlankSpace size={20} />
        <View className="w-40 h-56 bg-red-500 rounded-lg overflow-hidden">
          <Text className="text-[#1A1E25] tracking-[0.234px] font-semibold text-lg">
            Destinos populares
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}
