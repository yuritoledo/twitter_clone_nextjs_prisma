/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/dist/next-server/lib/router/router'
import {
  ThemeProvider, CSSReset,
} from '@chakra-ui/core'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
