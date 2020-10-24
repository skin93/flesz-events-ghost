import React from 'react'
import Link from 'next/link'
import styles from './Posts.module.css'
import PostItem from './PostItem'

const Posts = ({ posts }) => {
  return (
    <section className={styles.postsContainer}>
      {posts?.map((post) => (
        <div key={post.id} className={styles.post}>
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
