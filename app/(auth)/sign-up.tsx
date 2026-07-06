import { LinkButton } from '@/components/link-button'
import { Text, View } from 'react-native'

export default function SignUp() {
  return (
    <View className='w-full max-w-xl mx-auto p-4 flex flex-col gap-4'>
      <Text className='text-xl sm:text-2xl font-semibold'>Sign Up</Text>
      <Text>Insert Form</Text>

      <LinkButton href='/sign-in'>Sign In</LinkButton>
    </View>
  )
}
