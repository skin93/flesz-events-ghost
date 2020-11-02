import React from 'react'
import FeaturedPostItem from './FeaturedPostItem'
import styled from 'styled-components'
import { device } from '../../constants/device'

const FeaturedPostsContainer = styled.div`
  display: grid;
  gap: 15px;

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

const FeaturedPosts = ({ featured }) => {
  return (
    <FeaturedPostsContainer>
      {featured?.map((feat) => (
        <FeaturedPostItem key={feat.title} feat={feat} />
      ))}
    </FeaturedPostsContainer>
  )
}

export default FeaturedPosts
