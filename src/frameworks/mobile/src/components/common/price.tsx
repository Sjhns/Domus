import { Text, View } from 'react-native'

type PriceProps = {
  price: number
  period: string
}

export const Price = ({ period, price }: PriceProps) => {
  return (
    <View className="flex-row items-center mt-auto">
      <Text className="text-[#1A1E25] text-xl tracking-widest font-semibold ">
        R${price}
      </Text>
      <View>
        <Text className="text-[#7D7F88] font-medium pt-[6px] text-sm">
          /{period}
        </Text>
      </View>
    </View>
  )
}
