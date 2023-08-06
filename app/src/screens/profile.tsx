import { View, ScrollView, Text, Image } from 'react-native'
import { ProfileMenu } from '../components/layout/profile-menu'
import { Divider } from '../components/common/divisor'
import { ProfileMenuOption } from '../components/common/profile-menu-option'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SpaceWhite } from '../components/common/space-white'
import { Avatar } from '../components/common/avatar'

export const Profile = () => {
  return (
    <View className="flex-1 pt-12 px-4">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex flex-col items-center justify-center mb-10">
          <Avatar
            src="https://randomuser.me/api/portraits/women/50.jpg"
            size="lg"
          />

          <Text className="text-4xl font-bold mt-4">Jane Doe</Text>
          <Text className="text-lg text-gray-500">jana.doe@gmail.com</Text>
        </View>

        <Divider />

        <ProfileMenu />

        <Divider />

        <SpaceWhite size={20} />

        <ProfileMenuOption
          icon={<Ionicons name="toggle" size={22} color="black" />}
          label="Switch to hosting"
        />

        <SpaceWhite size={170} />
      </ScrollView>
    </View>
  )
}
