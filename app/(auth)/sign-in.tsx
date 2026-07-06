import { LinkButton } from '@/components/link-button'
import { Text, View } from 'react-native'

export default function SignIn() {
  return (
    <View className='w-full max-w-xl mx-auto p-4 flex flex-col gap-4'>
      <Text className='text-xl sm:text-2xl font-semibold'>Sign In</Text>
      <Text>Insert Form</Text>

      <LinkButton href='/sign-up'>Sign Up</LinkButton>
    </View>
  )
}
