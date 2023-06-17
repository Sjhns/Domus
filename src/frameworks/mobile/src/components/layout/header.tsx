import { Text, View, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { SearchInput } from '../common/search-input'

export const Header = () => {
  return (
    <View className="space-y-6 mt-3 mb-9"> 
      <View>
        <Text className="text-[#7D7F88] text-sm tracking-wider mb-1">
          Find your place in
        </Text>
        <View className="flex-row items-center">
          {/* <Octicons name="location" size={25} color={'#6246EA'} />  */}

          <MaterialIcons name="location-on" size={30} color={'#6246EA'} />

          <View className="flex-row items-center justify-center space-x-3">
            <Text className="text-[#1A1E25] font-semibold text-2xl">
              Surabaya, Indonesia
            </Text>
          </View>
        </View>
      </View>

      <View>
        <SearchInput />
      </View>

      <View className="space-y-2">
        <Text className="text-[#1A1E25] tracking-widest font-semibold text-lg">
          What do you need?
        </Text>

        <View
          className="bg-[#F2F2F3] border-[.8px] border-[#E3E3E7] h-[63px]
          overflow-hidden px-2 py-[5px] rounded-full flex-row items-center 
          justify-between space-x-1"
        >
          <Pressable
            onPress={() => console.log('pressed')}
            className="bg-[#6246EA] shadow-lg h-full flex-1 rounded-full items-center
            justify-center
          "
          >
            <Text className="text-[#FDFDFD] tracking-widest font-medium text-base">
              I need to rent
            </Text>
          </Pressable>

          <Pressable
            className="bg-transparent h-full flex-1 rounded-full 
            items-center justify-center"
          >
            <Text className="text-[#7D7F88] tracking-tighter text-base">
              I need to buy
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
