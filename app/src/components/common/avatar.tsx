import { Image } from 'react-native'

type AvatarProps = {
  size: 'lg' | 'md' | 'sm'
  src: string
}

export const Avatar = ({ size, src }: AvatarProps) => {
  return (
    <Image
      style={{
        width: size === 'lg' ? 144 : 110,
        height: size === 'lg' ? 144 : 110,
      }}
      className="rounded-full object-cover object-center"
      source={{
        uri: src,
      }}
    />
  )
}
