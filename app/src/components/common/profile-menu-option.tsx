import { ReactNode } from 'react'
import { View, Text } from 'react-native'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'

type ProfileMenuProps = {
  icon: ReactNode
  label: string
}

export const ProfileMenuOption = ({ icon, label }: ProfileMenuProps) => {
  return (
    <View className="flex-row items-center my-4">
      <View className="rounded-xl border bg-foundation-white-light border-gray-300 shadow-md items-center justify-center w-12 h-12 p-2">
        {icon}
      </View>
      <Text className="text-base font-medium ml-2">{label}</Text>

      <View className="ml-auto">
        <SimpleLineIcons name="arrow-right" size={20} color="#7D7F88" />
      </View>
    </View>
  )
}
