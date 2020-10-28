import styled from 'styled-components'
import { device } from '../../constants/device'

export default styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media ${device.laptopL} {
    grid-template-columns: 4fr 2fr;
    overflow: hidden;

    & > :nth-child(2) {
      position: fixed;
      top: 230px;
      left: 70%;
    }
  }
`
