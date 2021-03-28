import React from 'react'
import FeaturedPostItem from './FeaturedPostItem'
import { FeaturedPostsContainer } from './FeaturedPosts.styled'

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
