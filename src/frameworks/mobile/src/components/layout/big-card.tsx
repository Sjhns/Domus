import { Image, View, Text, Dimensions } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Price } from '../common/price'

const screenWidth = Dimensions.get('window').width

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
      className="h-52 bg-white rounded-xl overflow-hidden  flex-row shadow-lg 
      border border-[#a4a1a13f] "
      style={{ width: screenWidth * 0.9 }}
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
          <FontAwesome name="star" size={17} color={'#FFBF75'} className="" />
          <View className="flex-row">
            <Text>4.3</Text>
            <Text className="ml-1 text-gray-500">(73)</Text>
          </View>
        </View>

        <View className="my-3 w-56">
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

        <View className="flex-row items-center space-x-3 my-2">
          <View className="flex-row space-x-2 items-center">
            <FontAwesome name="bed" size={17} color={'#7D7F88'} className="" />

            <Text>{rooms} quartos</Text>
          </View>
          <View className="flex-row space-x-2 items-center">
            <FontAwesome name="home" size={17} color={'#7D7F88'} className="" />
            <Text>{squareMeters} m²</Text>
          </View>
        </View>

        <Price price={price} period={period} />
      </View>
    </View>
  )
}
