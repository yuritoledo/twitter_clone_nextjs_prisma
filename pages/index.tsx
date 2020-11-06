import { Flex, SimpleGrid } from '@chakra-ui/core'
import Layout from 'components/Layout'
import useTweet from 'hooks/useTweet'
import Link from 'next/link'

// const fetcher = (...url: any) => fetch(url).then((x) => x.json());

const TweetsList = () => {
  const { data, isValidating, error } = useTweet()

  if (isValidating) return <span>aguarde ...</span>
  if (error) {
    console.log(error)
    return <span>ERROOOUU</span>
  }

  return (
    <SimpleGrid columns={[1, 3]} spacing="40px">
      {data?.map((t) => (
        <Flex
          key={t.id}
          height="80px"
          borderWidth="1px"
          alignItems="center"
          bg="yellow"
        >
          <span>{t.text}</span>
          <strong>{t.User.name}</strong>
        </Flex>
      ))}
      <Link href="/meus_tweets">
        <h1>Meus tweets</h1>
      </Link>
    </SimpleGrid>
  )
}

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Stranger, here is your feed</h1>
    <TweetsList />
  </Layout>
)

export default IndexPage
