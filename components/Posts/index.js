import React from 'react'
import PostItem from './PostItem'
import { PostsContainer } from './Posts.styled.js'

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
