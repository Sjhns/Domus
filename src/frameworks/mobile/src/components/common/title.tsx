import { View, Text } from 'react-native'

type TitleProps = {
  title: string
}

export const Title = ({ title }: TitleProps) => {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="text-[19px] text-[#1A1E25] tracking-[.208px] font-semibold">
        {title}
      </Text>

      <Text className="tracking-[.208px] text-[#6246EA] bg-clip-text text-[13px]">
        Veja todos
      </Text>
    </View>
  )
}
