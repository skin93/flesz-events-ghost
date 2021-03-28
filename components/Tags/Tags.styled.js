import styled from 'styled-components'
import { device } from '../../constants/device'

export const TagsContainer = styled.div`
  display: grid;
  gap: 30px;
  place-items: center;
  grid-template-columns: repeat(1, 1fr);

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`
