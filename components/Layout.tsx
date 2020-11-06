import { ReactNode } from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@chakra-ui/core'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = (props: Props) => {
  const { children, title = 'This is the default title' } = props
  return (
    <ThemeProvider>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </ThemeProvider>
  )
}

export default Layout
