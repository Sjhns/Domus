import { Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

type ImmobileDetailsProps = {
  rooms: number
  squareMeters: number
  my: number
}

export const RoomAndSizeDetails = ({
  my,
  rooms,
  squareMeters,
}: ImmobileDetailsProps) => {
  return (
    <View className={`flex-row items-center space-x-5 my-${my}`}>
      <View className="flex-row space-x-2 items-center">
        <FontAwesome name="bed" size={17} color={'#7D7F88'} />
        <Text>{rooms} quartos</Text>
      </View>
      <View className="flex-row space-x-2 items-center">
        <FontAwesome name="home" size={17} color={'#7D7F88'} />
        <Text>{squareMeters} m²</Text>
      </View>
    </View>
  )
}
