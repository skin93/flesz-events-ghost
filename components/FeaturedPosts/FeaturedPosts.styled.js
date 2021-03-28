import styled from 'styled-components'
import { device } from '../../constants/device'

export const FeaturedPostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(1, 1fr);
  }
`
