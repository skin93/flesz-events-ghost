import React from 'react'
import PostItem from './PostItem'
import styled from 'styled-components'
import { device } from '../../constants/device'

const PostsContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(1, 1fr);

  @media ${device.mobileS} {
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Posts = ({ posts }) => {
  return (
    <PostsContainer>
      {posts.map((post) => (
        <PostItem key={post.title} post={post} />
      ))}
    </PostsContainer>
  )
}

export default Posts
