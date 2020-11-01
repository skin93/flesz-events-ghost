import styled from 'styled-components'
import { device, size } from '../../constants/device'

export const MainContainer = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  min-height: 100vh;
  margin: 0 auto;

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
    flex-direction: row;
    max-width: ${size.laptopL};
  }

  @media ${device.desktop} {
    max-width: ${size.desktop};
  }
`

export const Children = styled.section`
  flex: 3;
`
