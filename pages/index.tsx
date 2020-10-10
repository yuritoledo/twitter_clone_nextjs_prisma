import { Tweet } from '@prisma/client';
import Layout from 'components/Layout';
import useTweet from 'hooks/useTweet';

// const fetcher = (...url: any) => fetch(url).then((x) => x.json());

const TweetsList = () => {
  const { data, isValidating, error } = useTweet();
  console.log(data);

  if (isValidating) return <span>aguarde ...</span>;
  if (error) {
    console.log(error);
    return <span>ERROOOUU</span>;
  }

  return (
    <ul>
      {data?.map((t) => (
        <li key={t.id}>
          <span>{t.text}</span>
          <strong>{t.User.name}</strong>
        </li>
      ))}
    </ul>
  );
};

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Stranger, here is your feed</h1>
    <TweetsList />
  </Layout>
);

export default IndexPage;
