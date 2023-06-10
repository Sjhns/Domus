import { Image, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

export const CarouselImmobile = () => {
  const id = [1, 2]
  return (
    <View className="">
      <View className="mb-2">
        <Text className="text-xl font-medium">Os mais perto de você</Text>
      </View>

      <View className="flex-row gap-x-3 overflow-hidden">
        {id.map((id) => {
          return (
            <View
              className="w-52 h-min rounded-md overflow-hidden shadow-sm"
              key={id}
            >
              <Image
                source={require('../../../assets/images/apartamento.jpg')}
                className="w-full h-32 object-cover"
              />
              <View className="px-2 pb-2 pt-1">
                <Text className="text-[16px] font-medium">
                  Pent House Apartment
                </Text>

                <View className="flex-row items-center gap-x-1 mt-1">
                  <Feather name="map" size={13} className="ml-3" />
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    className="text-gray-700"
                  >
                    123, Main Street, Downtown, Los Ange - California
                  </Text>
                </View>

                <View className="mt-1">
                  <Text className="text-blue-600 font-semibold">R$750</Text>
                </View>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}
