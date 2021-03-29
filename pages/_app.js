import Router from 'next/router'

import * as gtag from '../lib/gtag'

import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../global'
import { theme } from '../theme'

import Layout from '../components/Layout'

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
