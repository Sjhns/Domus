import { View, Text } from 'react-native'

type ProfileHeaderProps = {
  name: string
  email: string
}

export const ProfileHeader = ({ email, name }: ProfileHeaderProps) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  )
}
