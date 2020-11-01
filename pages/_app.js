import { SWRConfig } from 'swr'
import { GlobalStyles } from '../global'
import { ThemeProvider } from 'styled-components'

import { Layout } from '../components/index'
import { theme } from '../theme'

const fetcher = async (url) => {
  const res = await fetch(url)
  // // If the status code is not in the range 200-299,
  // // we still try to parse and throw it.
  // if (!res.ok) {
  //   const error = new Error('An error occurred while fetching the data.')
  //   // Attach extra info to the error object.
  //   error.info = await res.json()
  //   error.status = res.status
  //   throw error
  // }
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
