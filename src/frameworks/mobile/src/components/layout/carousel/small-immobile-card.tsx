import { Ionicons } from '@expo/vector-icons'
import { Image, Text, View } from 'react-native'

import { ImmobilePrice } from '../../common/immobile-price'
import { ImmobileRoomAndSizeDetails } from '../../common/immobile-room-and-size-details'

type SmallImmobileCardProps = {
  title: string
  location: string
  price: number
  image: string
  rooms: number
  squareMeters: number
  period: string
}

export const SmallImmobileCard = ({
  image,
  location,
  price,
  rooms,
  squareMeters,
  title,
  period,
}: SmallImmobileCardProps) => {
  return (
    <View
      className="w-[220px] h-min rounded-md overflow-hidden shadow-lg border 
    border-[#a4a1a13f] pb-1 bg-white"
    >
      <View className="h-32">
        <Image
          source={{
            uri: image,
          }}
          className=" w-full h-full object-cover"
        />
      </View>

      <View className="px-2 pb-2 pt-1">
        <Text className="text-lg leading-6 text-[#1A1E25] font-medium">
          {title}
        </Text>

        <View className="flex-row items-center gap-x-[2px]">
          <Ionicons name="location-outline" size={15} />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="text-[#7D7F88] text-sm tracking-widest w-[90%]"
          >
            {location}
          </Text>
        </View>

        <ImmobileRoomAndSizeDetails
          my={10}
          rooms={rooms}
          squareMeters={squareMeters}
        />

        <ImmobilePrice price={price} period={period} />
      </View>
    </View>
  )
}
