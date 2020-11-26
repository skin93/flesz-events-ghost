import { TheHeader } from '../index'
import { TheFooter } from '../index'
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
