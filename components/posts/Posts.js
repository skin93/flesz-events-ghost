import React from 'react'
import PostItem from './PostItem'
import styled from 'styled-components'

const PostsContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
