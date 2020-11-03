import { SWRConfig } from 'swr'
import { GlobalStyles } from '../global'
import { ThemeProvider } from 'styled-components'
import Router from 'next/router'

import { Layout } from '../components/index'
import { theme } from '../theme'

import * as gtag from '../lib/gtag'

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

const fetcher = async (url) => {
  const res = await fetch(url)
  return await res.json()
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </ThemeProvider>
  )
}

export default MyApp
