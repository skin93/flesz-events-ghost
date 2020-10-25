import React from 'react'
import Link from 'next/link'
import PostItem from './PostItem'
import PostsContainer from './PostsContainer'

const Posts = ({ posts }) => {
  return (
    <PostsContainer>
      {posts?.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/[slug]`} as={`/posts/${post.slug}`}>
            <a>
              <PostItem post={post} />
            </a>
          </Link>
        </div>
      ))}
    </PostsContainer>
  )
}

export default Posts
