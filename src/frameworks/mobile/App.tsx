import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, ScrollView } from 'react-native'
import { Home } from './src/screens/home'
import {} from 'expo'

export default function App() {
  return (
    <SafeAreaView className={`flex-1 mt-[24px]`}>
      <StatusBar style="auto" />
      <ScrollView className="flex-1">
        <Home />
      </ScrollView>
    </SafeAreaView>
  )
}
