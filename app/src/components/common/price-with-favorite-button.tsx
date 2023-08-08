import { Text, View, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'

type PriceWithFavoriteButtonProps = {
  price: number
  period: string
}

export const PriceWithFavoriteButton = ({
  period,
  price,
}: PriceWithFavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

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

      {isFavorite ? (
        <Pressable onPress={toggleFavorite}>
          <Ionicons name="heart-sharp" size={28} color="#ff0000" />
        </Pressable>
      ) : (
        <Pressable onPress={toggleFavorite}>
          <Ionicons
            name="heart-outline"
            size={28}
            color="#7D7F88"
            onPress={toggleFavorite}
          />
        </Pressable>
      )}
    </View>
  )
}
