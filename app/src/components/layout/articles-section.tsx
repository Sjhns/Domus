import { Text, View, Pressable, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Image } from '../common/image'
import { Title } from '../common/title'
import { BlankSpace } from '../common/space-white'

export const ArticlesSection = () => {
  const data = [1, 2]
  return (
    <View>
      <Title title="Os melhores artigos" />

      <BlankSpace size={10} />

      {data.map((id) => (
        <View key={id}>
          <Article key={id} />
          <BlankSpace size={10} />
        </View>
      ))}

      <Pressable
        className="bg-[#6246ea1a] w-full mt-3 
      py-[15px] justify-center items-center  rounded-[54px] overflow-hidden border border-[#5839f1]"
      >
        <Text className="text-base font-semibold text-[#6246EA]">
          Read more articles
        </Text>
      </Pressable>
    </View>
  )
}

const Article = () => {
  return (
    <View className="rounded-[10px] overflow-hidden shadow-md border-[.8px] border-[#0f0f0f42]">
      <View className="w-full h-[100px]">
        <Image source="https://awionline.org/sites/default/files/styles/art/public/page/image/cedric-frixon-Me7ySkVmWcw-unsplash.jpg?itok=h5iy3Jbk" />
      </View>

      <View className="px-3 pb-4">
        <View className="flex-row items-center justify-end pt-2">
          <Text className="text-[#868686] font-normal text-[11px]">
            Saturday, November 10, 2021
          </Text>
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

        <Pressable className="w-[120px] mt-6 p-[9px] justify-center items-center bg-[#6246ea1a] rounded-[36px] overflow-hidden">
          <Text className="text-[#6246EA] text-[14.05px] font-semibold tracking-[0.26px]">
            Read more
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
