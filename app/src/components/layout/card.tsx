import { View, Image as ImageNative, Text, Pressable } from 'react-native'
import { styled } from 'nativewind'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { ReactElement, useState } from 'react'

type ImmobileCardProps = {
  title: string
  location: string
  price: number
  image: string
  rooms: number
  squareMeters: number
  period: string
}

const Image = ({ source }: { source: string }) => {
  return (
    <ImageNative
      source={{
        uri: source,
      }}
      className="w-full h-full object-cover object-center"
    />
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
  return <View className="p-3">{children}</View>
}

type HorizontalCardFooterProps = {
  children: ReactElement[] | ReactElement
}

const HorizontalCardFooter = ({ children }: HorizontalCardFooterProps) => {
  return <View className="p-3 space-y-6">{children}</View>
}

const StyledView = styled(View)

export const HorizontalCard = () => {
  const [isFavorite, setIsFavorite] = useState(true)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <StyledView
      className="h-48 w-[360] bg-white rounded-md overflow-hidden flex-row shadow-lg 
    border border-[#a4a1a13f]"
      style={{
        display: isFavorite ? 'flex' : 'none',
      }}
    >
      <HorizontalCardHeader>
        <Image source="https://www.lopes.com.br/blog/wp-content/uploads/2017/06/interior-2400372_1920.jpg" />
      </HorizontalCardHeader>

      <View className="flex-1 justify-between">
        <HorizontalCardBody>
          <View className="flex-row items-center space-x-1 mb-2">
            <FontAwesome name="star" size={17} color={'#FFBF75'} />
            <View className="flex-row">
              <Text>4.3</Text>
              <Text className="ml-1 text-gray-500">(73)</Text>
            </View>
          </View>

          <View className="">
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

          <View className="flex-row items-center justify-between mt-auto">
            <View className="flex-row items-center">
              <Text className="text-[#1A1E25] text-xl tracking-widest font-semibold ">
                R$ {1000}
              </Text>
              <Text className="text-[#7D7F88] font-medium pt-[6px] text-sm">
                /{'mês'}
              </Text>
            </View>

            {isFavorite ? (
              <Pressable onPress={toggleFavorite}>
                <Ionicons name="heart-sharp" size={28} color="#ff0000" />
              </Pressable>
            ) : (
              <Pressable onPress={toggleFavorite}>
                <Ionicons
                  name="heart-outline"
                  size={28}
                  color="#7D7F88"
                  onPress={toggleFavorite}
                />
              </Pressable>
            )}
          </View>
        </HorizontalCardFooter>
      </View>
    </StyledView>
  )
}
