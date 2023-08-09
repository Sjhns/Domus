import { TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

type SearchInputProps = {
  placeholder?: string
}
export const SearchInput = ({ placeholder }: SearchInputProps) => {
  return (
    <View
      className={`rounded-full border-[.8px] 
    border-[#E3E3E7] h-[53px] overflow-hidden  flex-row items-center 
    justify-between px-4 bg-[#F2F2F3]`}
    >
      <Ionicons name="search-outline" size={24} color={'#1A1E25'} />
      <TextInput
        placeholder={placeholder}
        className="text-[#3a3b40] flex-1 h-full px-1 bg-transparent 
        outline-none text-[17px]"
      />
      <Ionicons name="settings-outline" size={24} color={'#1A1E25'} />
    </View>
  )
}
