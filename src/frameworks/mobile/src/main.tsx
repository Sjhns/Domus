import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'

import { Navigator } from './config/navigator/navigator'
import { COLORS } from './theme/colors'

export const App = () => {
  return (
    <SafeAreaView className="flex-1 mt-[24px]">
      <StatusBar style="auto" backgroundColor={COLORS.background} />

      <Navigator />
    </SafeAreaView>
  )
}
