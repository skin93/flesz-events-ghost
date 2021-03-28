import TheHeader from './TheHeader'
import TheFooter from './TheFooter'
import { MainContainer, Children } from './Layout.styled'

const Layout = ({ children }) => {
  return (
    <>
      <TheHeader />
      <MainContainer>{children}</MainContainer>
      <TheFooter />
    </>
  )
}

export default Layout
