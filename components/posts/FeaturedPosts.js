import React from 'react'
import FeaturedPostItem from './FeaturedPostItem'

import styled from 'styled-components'
import { device } from '../../constants/device'

const FeaturedPostsContainer = styled.div`
  display: grid;
  gap: 10px;

  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(1, 1fr);
    /* justify-items: center;
    align-items: center; */
  }
`

const FeaturedPosts = ({ featured }) => {
  return (
    <FeaturedPostsContainer>
      {featured?.map((feat) => (
        <FeaturedPostItem feat={feat} />
      ))}
    </FeaturedPostsContainer>
  )
}

export default FeaturedPosts
