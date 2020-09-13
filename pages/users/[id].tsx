import { GetStaticProps } from 'next';

import { User } from '../../interfaces';
import Layout from '../../components/Layout';

type Props = {
  item?: User
}

const StaticPropsDetail = (props: Props) => {
  const { item } = props;
  return (
    <Layout
      title={
        `${item ? item.name : 'User Detail'} | Next.js + TypeScript Example`
      }
    />
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => ({ props: { params } });

export default StaticPropsDetail;
