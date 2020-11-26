import styled from 'styled-components'
import { device, size } from '../../constants/device'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: hidden;
  min-height: 100vh;
  justify-content: center;
  margin: 30px auto;

  @media ${device.mobileS} {
    max-width: ${size.mobileS};
  }
  @media ${device.mobileM} {
    max-width: ${size.mobileM};
  }

  @media ${device.mobileL} {
    max-width: ${size.mobileL};
  }

  @media ${device.tablet} {
    max-width: ${size.tablet};
  }

  @media ${device.laptop} {
    max-width: ${size.laptop};
  }

  @media ${device.laptopL} {
    max-width: ${size.laptopL};
  }

  @media ${device.desktop} {
    max-width: ${size.desktop};
  }
  justify-content: center;
  align-items: center;
`

export const Children = styled.section`
  padding: 0 15px;
  flex: 1;
`
