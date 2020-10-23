import React from 'react'
import Link from 'next/link'
import PostItem from './PostItem'

import styles from './Posts.module.css'

const Posts = ({ posts }) => {
  return (
    <section className={styles.posts}>
      {posts?.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/[slug]`} as={`/posts/${post.slug}`}>
            <a>
              <PostItem post={post} />
            </a>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default Posts
