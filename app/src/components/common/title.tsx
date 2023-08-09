import { View, Text } from 'react-native'

type TitleProps = {
  title: string
}

export const Title = ({ title }: TitleProps) => {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="text-[#1A1E25] tracking-[.208px] font-semibold text-xl">
        {title}
      </Text>
    </View>
  )
}
