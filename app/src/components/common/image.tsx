import { Image as ImageNative } from 'react-native'

export const Image = ({ source }: { source: string }) => {
  return (
    <ImageNative
      source={{
        uri: source,
      }}
      className="w-full h-full object-cover object-center"
    />
  )
}
