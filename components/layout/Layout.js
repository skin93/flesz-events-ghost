import { TheHeader } from '../index'
import { TheFooter } from '../index'
import { MainContainer, Children } from './Layout.styled'

const Layout = ({ children }) => {
  return (
    <>
      <TheHeader />
      <MainContainer>
        <Children>{children}</Children>
      </MainContainer>
      <TheFooter />
    </>
  )
}

export default Layout
