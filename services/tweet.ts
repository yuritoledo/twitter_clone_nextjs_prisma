import { Tweet, TweetCreateInput } from '@prisma/client'
import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
})

export const createTweet = async (tweet: TweetCreateInput) => {
  // const httpResponse = await fetch('api/tweet', {
  //   method: 'POST',
  //   body: JSON.stringify(tweet),
  // })

  // const response = await httpResponse.json()
  // return response
}

export const fetchAllTweets = () => { }

export const deleteTweet = async (id: number): Promise<Tweet | null> => {
  try {
    const response = await api.delete<Tweet>(`/tweet/${id}`)
    return response.data
  } catch (error) {
    console.log('error', error)
    return null
  }
}
