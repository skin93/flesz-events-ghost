import styled from 'styled-components'
import { device } from '../../constants/device'

export const PostsContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(1, 1fr);
  justify-content: flex-start;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`
