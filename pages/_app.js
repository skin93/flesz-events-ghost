import { SWRConfig } from 'swr'
import { GlobalStyles } from '../global'
import { ThemeProvider } from 'styled-components'

import { Layout } from '../components/index'
import { theme } from '../theme'

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
