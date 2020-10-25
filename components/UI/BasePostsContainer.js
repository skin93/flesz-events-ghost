import styled from 'styled-components'
import { device } from '../../styles/device'

export const PostsContainer = styled.div`
  display: grid;
  gap: 5px;
  place-items: center;
  grid-auto-flow: row dense;

  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(3, 1fr);

    & > :nth-child(4n + 1) {
      grid-column: 1 / span 2;
    }

    & > :nth-child(4n + 2) {
      grid-column: 2 / span 2;
    }

    & > :nth-child(4n + 5) {
      grid-column: 1 / span 3;
    }

    & > :nth-child(4n + 6) {
      grid-column: 1 / span 2;
    }
  }
`
