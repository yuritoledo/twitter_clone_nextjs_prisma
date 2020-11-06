import { User } from '@prisma/client'
import useSWR from 'swr'

type Tweet = {
  id: number
  text: string
  User: Pick<User, 'name'>
}

const useTweet = () => {
  const { data, isValidating, error } = useSWR<Tweet[]>('/api/tweet')

  return { data, isValidating, error }
}

export default useTweet
