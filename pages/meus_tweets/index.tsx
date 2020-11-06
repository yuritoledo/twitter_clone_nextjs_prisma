import { FC } from 'react'
import { SimpleGrid } from '@chakra-ui/core'
import { Tweet } from '@prisma/client'
import { GetStaticProps } from 'next'
import { getAllTweetsWithUserName } from 'repositories/tweet'
import { DeleteIcon } from './components/DeleteIcon'
import { Card } from './components/Card'

interface Props {
  tweets: Tweet[]
}
const MeusTweets: FC<Props> = (props) => {
  const { tweets } = props
  return (
    <SimpleGrid
      columns={[1, 2, 3, 7]}
      spacing="20px"
    >
      {tweets.map((tweet) => (
        <Card key={tweet.id}>
          <h1>{tweet.text}</h1>
          <DeleteIcon id={tweet.id} />
        </Card>
      ))}
    </SimpleGrid>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const tweets = await getAllTweetsWithUserName()

  return {
    props: {
      tweets,
    },
  }
}

export default MeusTweets
