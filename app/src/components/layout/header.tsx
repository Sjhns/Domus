import { Text, View, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { SearchInput } from '../common/search-input'
import { useState } from 'react'

type HeaderProps = {
  userCurrentLocation: string
}

export const Header = ({ userCurrentLocation }: HeaderProps) => {
  const [activeTab, setActiveTab] = useState('rent')

  const handleRentPress = () => {
    setActiveTab('rent')
  }

  const handleBuyPress = () => {
    setActiveTab('buy')
  }

  return (
    <View className="space-y-6 my-3">
      <View>
        <Text className="text-[#7D7F88] text-sm tracking-wider mb-1">
          Find your place in
        </Text>
        <View className="flex-row items-center">
          <MaterialIcons name="location-on" size={30} color={'#6246EA'} />

          <View className="flex-row items-center justify-center space-x-3">
            <Text className="text-[#1A1E25] font-semibold text-2xl">
              {userCurrentLocation}
            </Text>
          </View>
        </View>
      </View>

      <View>
        <SearchInput />
      </View>

      <View className="space-y-2">
        <Text className="text-[#1A1E25] tracking-widest font-semibold text-lg">
          What do you need?
        </Text>

        <View
          className="border-[.8px] border-[#E3E3E7] h-[59px]
          overflow-hidden px-2 py-[5px] rounded-full flex-row items-center 
          justify-between space-x-1"
        >
          <Pressable
            onPress={handleRentPress}
            className={`${
              activeTab === 'rent' ? 'bg-[#6246EA]' : 'bg-transparent'
            } shadow-lg h-full flex-1 rounded-full items-center justify-center`}
          >
            <Text
              className={`${
                activeTab === 'rent' ? 'text-[#FDFDFD]' : 'text-[#7D7F88]'
              } tracking-widest font-medium text-base`}
            >
              I need to rent
            </Text>
          </Pressable>

          <Pressable
            onPress={handleBuyPress}
            className={`${
              activeTab === 'buy' ? 'bg-[#6246EA]' : 'bg-transparent'
            } h-full flex-1 rounded-full items-center justify-center`}
          >
            <Text
              className={`${
                activeTab === 'buy' ? 'text-[#FDFDFD]' : 'text-[#7D7F88]'
              } tracking-widest font-medium text-base`}
            >
              I need to buy
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
