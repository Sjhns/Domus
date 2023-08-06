import { View } from 'react-native'

type SpaceProps = {
  size: number
}

export const SpaceWhite = ({ size }: SpaceProps) => {
  return (
    <View
      style={{
        height: size,
        width: 100,
      }}
    />
  )
}
