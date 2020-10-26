import styled from 'styled-components'
import { device } from '../../constants/device'

export default styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media ${device.laptopL} {
    grid-template-columns: 3fr 1fr;
    overflow: hidden;
  }
`
