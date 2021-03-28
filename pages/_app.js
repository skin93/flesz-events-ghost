import { GlobalStyles } from '../global'
import { ThemeProvider } from 'styled-components'
import Router from 'next/router'

import Layout from '../components/Layout'
import { theme } from '../theme'

import * as gtag from '../lib/gtag'

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
