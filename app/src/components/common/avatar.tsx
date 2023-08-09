import { Image } from 'react-native'

type AvatarProps = {
  size: 'lg' | 'md' | 'sm'
  src: string
}

export const Avatar = ({ size, src }: AvatarProps) => {
  return (
    <Image
      style={{
        width: size === 'lg' ? 144 : size === 'md' ? 110 : 52,
        height: size === 'lg' ? 144 : size === 'md' ? 110 : 52,
      }}
      className="rounded-full object-cover object-center"
      source={{
        uri: src,
      }}
    />
  )
}
