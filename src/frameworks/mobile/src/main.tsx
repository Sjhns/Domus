import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'

import { Navigator } from './config/navigator/navigator'
import { COLORS } from './theme/colors'
import { useFonts } from 'expo-font'

import config from '../tamagui.config'
import { TamaguiProvider } from 'tamagui'

export const App = () => {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <SafeAreaView className="flex-1 mt-[24px]">
        <StatusBar style="auto" backgroundColor={COLORS.background} />

        <Navigator />
      </SafeAreaView>
    </TamaguiProvider>
  )
}
