import { GetStaticProps } from 'next'

import { User } from '../../interfaces'
import Layout from '../../components/Layout'

type Props = {
  item?: User
  errors?: string
}

const StaticPropsDetail = ({ item }: Props) => {
  return (
    <Layout
      title={
        `${item ? item.name : 'User Detail'} | Next.js + TypeScript Example`
      }
    >
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  return { props: { params } }
}

export default StaticPropsDetail
