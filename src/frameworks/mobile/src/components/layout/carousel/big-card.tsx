import { Image, View, Text } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Price } from '../../common/price'
import { RoomAndSizeDetails } from '../../common/room-and-size-details'

type BigCardProps = {
  title: string
  location: string
  price: number
  image: string
  rooms: number
  squareMeters: number
  period: string
}

export const BigCard = ({
  image,
  location,
  period,
  price,
  rooms,
  squareMeters,
  title,
}: BigCardProps) => {
  return (
    <View
      className="h-52 bg-white rounded-md overflow-hidden flex-row shadow-lg 
      border border-[#a4a1a13f]"
    >
      <View className="w-28 h-full">
        <Image
          source={{
            uri: image,
          }}
          className="w-full h-full object-cover"
        />
      </View>

      <View className="p-3">
        <View className="flex-row items-center space-x-1">
          <FontAwesome name="star" size={17} color={'#FFBF75'} />
          <View className="flex-row">
            <Text>4.3</Text>
            <Text className="ml-1 text-gray-500">(73)</Text>
          </View>
        </View>

        <View className="my-3 w-52">
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            className="text-lg leading-6 text-[#1A1E25] font-normal"
          >
            {title}
          </Text>
          <View className="flex-row items-center gap-x-[2px] mt-[2px]">
            <Ionicons name="location-outline" size={16} />
            <Text className="text-[#7D7F88] text-sm tracking-widest">
              {location}
            </Text>
          </View>
        </View>

        <RoomAndSizeDetails my={2} rooms={rooms} squareMeters={squareMeters} />

        <Price price={price} period={period} />
      </View>
    </View>
  )
}
