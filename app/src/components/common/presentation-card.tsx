import { View, Text, Pressable } from 'react-native'
import { Image } from './image'

export const PresentationCard = () => (
  <View className="mt-5 flex-row overflow-hidden rounded-xl shadow-md border-[.8px] border-[#0f0f0f42]">
    <View className="flex-1 p-4 bg-[#6c51f5]">
      <Text className="text-[#FFF] text-xl font-semibold tracking-[0.2px]">
        Quer alugar ou vender sua propriedade?
      </Text>

      <Text className="mt-2 text-[#E3DDFF] text-[15px] tracking-[0.26px]">
        Ganhe renda passiva alugando ou vendendo suas propriedades!
      </Text>

      <Pressable
        className="bg-[#FFF] mt-auto w-[180px] px-2 py-3 justify-between 
      items-center shadow-lg rounded-[30px] overflow-hidden"
      >
        <Text className="font-semibold text-[#6246EA] text-center text-[14px]">
          Torne-se um anfitrião
        </Text>
      </Pressable>
    </View>

    <View className="w-[110px] h-[220px]">
      <Image source="https://www.jamesedition.com/stories/wp-content/uploads/2021/01/9.jpg" />
    </View>
  </View>
)
