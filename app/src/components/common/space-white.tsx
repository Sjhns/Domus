import { View } from 'react-native'

type SpaceProps = {
  size: number
}

export const BlankSpace = ({ size }: SpaceProps) => {
  return (
    <View
      style={{
        height: size,
        width: 100,
      }}
    />
  )
}
