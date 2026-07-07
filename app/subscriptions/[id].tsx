import { LinkButton } from '@/components/link-button'
import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

export default function SubscriptionDetails() {
  const { id } = useLocalSearchParams<{ id: string }>()

  return (
    <View>
      <Text>Subscription Details: {id}</Text>
      <LinkButton href='/'>Go back</LinkButton>
    </View>
  )
}
