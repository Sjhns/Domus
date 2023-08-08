import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { Navigator } from './config/navigator/navigator'

export const App = () => {
  return (
    <View className="flex-1 pt-6">
      <StatusBar style="auto" backgroundColor="#FCFCFC" />
      <Navigator />
    </View>
  )
}
