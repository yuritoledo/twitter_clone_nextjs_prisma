import { GetStaticProps } from 'next'
import Link from 'next/link'

import { User } from '../../interfaces'
import Layout from '../../components/Layout'

type Props = {
  items: User[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <pre>{items}</pre>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => ({ props: { items: [] } })

export default WithStaticProps
