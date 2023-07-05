import { View, Text, Image, TouchableOpacity } from 'react-native'

export const PresentationCard = () => (
  <View className="mt-10 flex-row overflow-hidden rounded-xl shadow-md border-[.8px] border-[#0f0f0f42]">
    <View className="flex-1 p-4 bg-[#6c51f5]">
      <Text className="text-[#FFF] text-xl font-semibold tracking-[0.2px]">
        Quer alugar ou vender sua propriedade?
      </Text>

      <Text className="mt-2 text-[#E3DDFF] text-[15px] tracking-[0.26px]">
        Ganhe renda passiva alugando ou vendendo suas propriedades!
      </Text>

      <TouchableOpacity
        className="bg-[#FFF] mt-auto w-[180px] px-2 py-3 justify-between 
      items-center shadow-lg rounded-[30px] overflow-hidden"
      >
        <Text className="font-semibold text-[#6246EA] text-center text-[14px]">
          Torne-se um anfitrião
        </Text>
      </TouchableOpacity>
    </View>

    <View className="w-[110px] h-[220px]">
      <Image
        source={{
          uri: 'https://www.jamesedition.com/stories/wp-content/uploads/2021/01/9.jpg',
        }}
        className="w-full h-full object-cover"
      />
    </View>
  </View>
)
