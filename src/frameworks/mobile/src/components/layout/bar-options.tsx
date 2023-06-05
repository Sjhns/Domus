import { Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

export const BarOptions = () => {
  return (
    <View className="flex-row mt-4 justify-between">
      <Option text={'Alugar'} icone={'credit-card'} />

      <Option text={'Comprar'} icone={'credit-card'} />

      <Option text={'Anunciar'} icone={'credit-card'} />
    </View>
  )
}

const Option = ({ text, icone }: { text: string; icone: any }) => {
  return (
    <View className="border px-6 py-2 rounded-md">
      <Feather name={icone} />
      <Text className="text-lg">{text}</Text>
    </View>
  )
}
