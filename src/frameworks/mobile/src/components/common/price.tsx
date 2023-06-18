import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

type PriceProps = {
  price: number
  period: string
}

export const Price = ({ period, price }: PriceProps) => {
  return (
    <View className="flex-row items-center justify-between mt-auto">
      <View className="flex-row items-center">
        <Text className="text-[#1A1E25] text-xl tracking-widest font-semibold ">
          R${price}
        </Text>
        <Text className="text-[#7D7F88] font-medium pt-[6px] text-sm">
          /{period}
        </Text>
      </View>

      <Ionicons name="heart-outline" size={28} color="#7D7F88" />
    </View>
  )
}
