import { View, Text } from 'react-native'

type CarouselTitleProps = {
  title: string
}

export const CarouselTitle = ({ title }: CarouselTitleProps) => {
  return (
    <View className="flex-row items-center justify-between mb-2">
      <Text className="text-[19px] text-[#1A1E25] tracking-[.208px] font-medium">
        {title}
      </Text>

      <Text className="tracking-[.208px] text-[#6246EA] bg-clip-text text-[13px]">
        Veja todos
      </Text>
    </View>
  )
}
