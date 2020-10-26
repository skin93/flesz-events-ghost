import React from 'react'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'
import styled from 'styled-components'
import { device } from '../../constants/device'

const MainContainer = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  min-height: 100vh;

  @media ${device.laptopL} {
    flex-direction: row;
    max-width: 1440px;
    margin: 0 auto;
  }
`

const Children = styled.section`
  flex: 3;
`

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
