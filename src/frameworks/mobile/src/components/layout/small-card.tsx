import { Image, Text, View } from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { Price } from '../common/price'
import { RoomAndSizeDetails } from '../common/room-and-size-details'

type SmallCardProps = {
  title: string
  location: string
  price: number
  image: string
  rooms: number
  squareMeters: number
  period: string
}

export const SmallCard = ({
  image,
  location,
  price,
  rooms,
  squareMeters,
  title,
  period,
}: SmallCardProps) => {
  return (
    <View
      className="w-[220px] h-min rounded-md overflow-hidden shadow-lg border 
    border-[#a4a1a13f] pb-1 bg-white"
    >
      <Image
        source={{
          uri: image,
        }}
        className="w-full h-32 object-cover"
      />
      <View className="px-2 pb-2 pt-1">
        <Text className="text-lg leading-6 text-[#1A1E25] font-medium">
          {title}
        </Text>

        <View className="flex-row items-center gap-x-[2px] w-full">
          <Ionicons name="location-outline" size={15} />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="text-[#7D7F88] text-sm tracking-widest w-[90%]"
          >
            {location}
          </Text>
        </View>

        <RoomAndSizeDetails my={4} rooms={rooms} squareMeters={squareMeters} />

        <Price price={price} period={period} />
      </View>
    </View>
  )
}
