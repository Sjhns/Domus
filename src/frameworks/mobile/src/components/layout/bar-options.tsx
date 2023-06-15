import { Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

export const BarOptions = () => {
  return (
    <View className="flex-row my-5 justify-between">
      <OptionMarcard text={'Alugar'} icone={'credit-card'} />

      <Option text={'Comprar'} icone={'gift'} />

      <Option text={'Anunciar'} icone={'dollar-sign'} />
    </View>
  )
}

const Option = ({ text, icone }: { text: string; icone: any }) => {
  return (
    <View className="flex-row justify-center items-center gap-x-1 border px-4 py-2 rounded-md">
      <Feather name={icone} size={16} />
      <Text className="text-base">{text}</Text>
    </View>
  )
}

const OptionMarcard = ({ text, icone }: { text: string; icone: any }) => {
  return (
    <View className="flex-row justify-center items-center gap-x-1 px-4 py-2 rounded-md bg-blue-500">
      <Feather name={icone} size={16} color={'#fafafa'} />
      <Text className="text-base text-white font-medium">{text}</Text>
    </View>
  )
}
