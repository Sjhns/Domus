import { View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import AntDesign from '@expo/vector-icons/AntDesign'
import { ProfileMenuOption } from '../common/profile-menu-option'

export const ProfileMenu = () => {
  return (
    <View className="my-7">
      <ProfileMenuOption
        icon={<FontAwesome name="user" size={22} color="black" />}
        label="Personal details"
      />
      <ProfileMenuOption
        icon={<AntDesign name="setting" size={22} color="black" />}
        label="Settings"
      />

      <ProfileMenuOption
        icon={<AntDesign name="creditcard" size={22} color="black" />}
        label="Payment details"
      />

      <ProfileMenuOption
        icon={<FontAwesome name="info" size={22} color="black" />}
        label="FAQ"
      />
    </View>
  )
}
