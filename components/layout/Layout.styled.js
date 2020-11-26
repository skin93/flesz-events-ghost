import styled from 'styled-components'
import { device } from '../../constants/device'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;

  @media ${device.mobileS} {
    max-width: 290px;
  }
  @media ${device.mobileM} {
    max-width: 345px;
  }

  @media ${device.mobileL} {
    max-width: 395px;
  }

  @media ${device.tablet} {
    max-width: 738px;
  }

  @media ${device.laptop} {
    max-width: 994px;
  }

  @media ${device.laptopL} {
    max-width: 1410px;
  }

  @media ${device.desktop} {
    max-width: 2530px;
  }
`

export const Children = styled.section`
  padding: 0 15px;
  flex: 1;
`
