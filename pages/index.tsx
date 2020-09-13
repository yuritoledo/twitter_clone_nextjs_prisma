import Layout from 'components/Layout';
import { createTweet } from 'services/tweet';

const IndexPage = () => {
  const fill = () => {
    createTweet({
      text: 'alou',
      User: { connect: { id: 1 } },
    });
  };

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Stranger </h1>
      <button type="button" onClick={fill}>aoou</button>
    </Layout>
  );
};

export default IndexPage;
