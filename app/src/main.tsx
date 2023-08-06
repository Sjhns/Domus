import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { Profile } from './screens/profile'

export const App = () => {
  return (
    <View className="flex-1 pt-6">
      <StatusBar style="auto" />
      <Profile />
    </View>
  )
}
