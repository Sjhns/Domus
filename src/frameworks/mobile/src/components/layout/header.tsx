import { Text, View } from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

export const Header = () => {
  return (
    <View className="mb-6 space-y-2 mt-3">
      <Text className="text-[#7D7F88] text-sm tracking-wider">
        Find your place in
      </Text>
      <View className="flex-row items-center">
        <Ionicons name="location-sharp" size={30} color={'#6246EA'} />

        <View className="flex-row items-center justify-center space-x-3">
          <Text className="text-[#1A1E25] font-semibold text-2xl">
            Surabaya, Indonesia
          </Text>
          <Text className="pt-[6px]">
            <FontAwesome name="arrow-down" size={16} color={'#1A1E25'} />
          </Text>
        </View>
      </View>
    </View>
  )
}
