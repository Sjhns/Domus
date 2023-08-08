import { ReactElement } from 'react'
import { Image as ImageNative, View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

type ImmobileCardProps = {
  title: string
  location: string
  price: number
  image: string
  rooms: number
  squareMeters: number
  period: string
}

export const HorizontalCard = () => {
  return (
    <View
      className="h-48 w-[360] bg-white rounded-md overflow-hidden flex-row shadow-lg 
    border border-[#a4a1a13f] bg-yellow-500"
    >
      <HorizontalCardHeader>
        <Image source="https://www.lopes.com.br/blog/wp-content/uploads/2017/06/interior-2400372_1920.jpg" />
      </HorizontalCardHeader>

      <View>
        <HorizontalCardBody>
          <View className="flex-row items-center space-x-1">
            <FontAwesome name="star" size={17} color={'#FFBF75'} />
            <View className="flex-row">
              <Text>4.3</Text>
              <Text className="ml-1 text-gray-500">(73)</Text>
            </View>
          </View>

          <View className=" flex-1">
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              className="text-lg leading-6 text-[#1A1E25] font-normal"
            >
              Pent House Apartment
            </Text>
            <View className="flex-row items-center gap-x-[2px] mt-[2px]">
              <Text className="text-[#7D7F88] text-[12px] tracking-widest">
                Main Street, Downtown
              </Text>
            </View>
          </View>
        </HorizontalCardBody>
        <HorizontalCardFooter>
          <View className="flex-row items-center space-x-5">
            <View className="flex-row space-x-2 items-center">
              <FontAwesome name="bed" size={17} color={'#7D7F88'} />
              <Text>{3} quartos</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <FontAwesome name="home" size={17} color={'#7D7F88'} />
              <Text>{230} m²</Text>
            </View>
          </View>
        </HorizontalCardFooter>
      </View>
    </View>
  )
}

type HorizontalCardHeaderProps = {
  children: ReactElement
}

const HorizontalCardHeader = ({ children }: HorizontalCardHeaderProps) => {
  return <View className="w-28 h-full">{children}</View>
}

type HorizontalCardBodyProps = {
  children: ReactElement[] | ReactElement
}

const HorizontalCardBody = ({ children }: HorizontalCardBodyProps) => {
  return <View className="p-3 bg-green-600 flex-1 w-full">{children}</View>
}

const Image = ({ source }: { source: string }) => {
  return (
    <ImageNative
      source={{
        uri: source,
      }}
      className="w-full h-full object-cover"
    />
  )
}

type HorizontalCardFooterProps = {
  children: ReactElement[] | ReactElement
}

const HorizontalCardFooter = ({ children }: HorizontalCardFooterProps) => {
  return <View className="p-3 bg-red-600">{children}</View>
}
