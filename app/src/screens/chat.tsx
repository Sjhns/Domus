import { View, Text, ScrollView } from 'react-native'
import { SearchInput } from '../components/common/search-input'
import { Avatar } from '../components/common/avatar'
import { BlankSpace } from '../components/common/space-white'

export const ChatScreen = () => {
  const id = [1, 2, 3, 8]
  return (
    <View className="flex-1 px-3 pt-8 bg-base pb-24">
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchInput />

        <BlankSpace size={28} />

        {id.map((id) => (
          <View key={id}>
            <Chat />
            <BlankSpace size={22} />
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const Chat = () => {
  return (
    <View className="flex-row items-center space-x-2">
      <Avatar
        src="https://randomuser.me/api/portraits/women/13.jpg"
        size="sm"
      />

      <View className="flex-1">
        <View className="flex-row items-center justify-between">
          <Text className="text-[17px] font-semibold tracking-[.208px]">
            Mariana
          </Text>
          <Text className="text-nav-gray text-[12px]">15:35</Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="text-[13px] text-nav-gray"
          >
            Thanks for contacting me!
          </Text>

          <View className="bg-[#6246EA] w-[21px] h-[21px] justify-center items-center rounded-full">
            <Text className="text-white text-[12px]">2</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
