import styled from 'styled-components'
import { device } from '../../styles/device'

export default styled.div`
  display: grid;
  gap: 10px;
  place-items: center;

  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(1, 1fr);
  }
`
