import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../store/index'
import '../styles/globals.css'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
