import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, ScrollView } from 'react-native'
import { Home } from './src/screens/home'
import {} from 'expo'

export default function App() {
  return (
    <SafeAreaView className="flex-1 mt-[24px] bg-[#ecf2f8] text-white">
      <StatusBar style="light" translucent={true} backgroundColor='#0d1117' />
      <ScrollView className="flex-1">
        <Home />
      </ScrollView>
    </SafeAreaView>
  )
}
