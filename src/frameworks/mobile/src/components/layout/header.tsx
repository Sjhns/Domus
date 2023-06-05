import { Image, Text, View } from 'react-native'

export const Header = () => {
  return (
    <View className="flex-row justify-between items-center">
      <View>
        <Text className="font-medium">Olá,</Text>
        <Text className="text-3xl">Johnson</Text>
      </View>

      <View>
        <Image
          className="w-10 h-10 rounded-full"
          source={{
            uri: 'https://avatars.githubusercontent.com/u/108435026?v=4',
          }}
        />
      </View>
    </View>
  )
}
