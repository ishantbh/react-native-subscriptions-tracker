import { LinkButton } from '@/components/link-button'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-xl font-bold text-blue-500'>
        Welcome to Nativewind!
      </Text>

      <LinkButton href='/sign-in'>Sign In</LinkButton>

      <LinkButton href='/sign-up' type='secondary'>
        Sign Up
      </LinkButton>

      <Link href='/subscriptions/spotify'>Spotify Subscription</Link>
      <Link
        href={{
          pathname: '/subscriptions/[id]',
          params: { id: 'claude' },
        }}
      >
        Claude Max Subscription
      </Link>
    </View>
  )
}
