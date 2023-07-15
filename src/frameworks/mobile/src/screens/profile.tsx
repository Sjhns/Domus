import { YStack, H2, Avatar, Paragraph } from 'tamagui'

export const Profile = () => {
  return (
    <YStack px={'$4'}>
      <YStack
        jc={'center'}
        ai={'center'}
        py={'$10'}
        space={'$1'}
        className="border-b border-[#D6D6D6]"
      >
        <Avatar size={110} circular>
          <Avatar.Image src="http://placekitten.com/200/300" />
          <Avatar.Fallback className="bg-gray-200" />
        </Avatar>
        <H2 className="text-[#1A1E25]" ls={0.312}>
          Lucy Bond
        </H2>
        <Paragraph className="text-[#7D7F88]" ls={0.32}>
          lucybond08@gmail.com
        </Paragraph>
      </YStack>
    </YStack>
  )
}
