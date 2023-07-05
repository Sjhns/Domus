import { Image, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const ArticlesSection = () => {
  const data = [1, 2]
  return (
    <View className="mt-9">
      <Text className="text-[19px] text-[#1A1E25] tracking-[.208px] font-semibold">
        Os melhores artigos
      </Text>

      {data.map((id) => (
        <Article key={id} />
      ))}

      <TouchableOpacity className="bg-[#6246ea1a] w-full mt-5 
      py-[15px] justify-center items-center  rounded-[54px] overflow-hidden border border-[#5839f1]">
        <Text className="text-base font-semibold text-[#6246EA]">Read more articles</Text>
      </TouchableOpacity>
    </View>
  )
}

const Article = () => {
  return (
    <View
      className="mt-4 rounded-[10px] overflow-hidden 
        shadow-md border-[.8px] border-[#0f0f0f42]"
    >
      <View className="w-full h-[100px]">
        <Image
          className="w-full h-full object-cover"
          source={{
            uri: 'https://awionline.org/sites/default/files/styles/art/public/page/image/cedric-frixon-Me7ySkVmWcw-unsplash.jpg?itok=h5iy3Jbk',
          }}
        />
      </View>

      <View className="px-4 pb-4">
        <View className="flex-row items-center justify-between pt-[8px] pb-[1px]">
          <Text className="text-[#868686] font-normal">
            Saturday, November 10, 2021
          </Text>

          <Ionicons name="heart-outline" size={26} color="#7D7F88" />
        </View>

        <Text className="text-[17px] font-semibold tracking-[0.32px] pb-2">
          Learn more about Surabaya’s Ecosystem in 2022
        </Text>

        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          className="text-[#464646] text-[14px] tracking-[0.28px] leading-5"
        >
          Surabaya as the second largest city in Indonesia has very high
          dynamics of land...
        </Text>

        <TouchableOpacity className="w-[120px] mt-6 p-[9px] justify-center items-center bg-[#6246ea1a] rounded-[36px] overflow-hidden">
          <Text className="text-[#6246EA] text-[14.05px] font-semibold tracking-[0.26px]">
            Read more
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


// 