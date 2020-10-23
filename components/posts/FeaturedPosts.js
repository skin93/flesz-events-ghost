import React from 'react'
import styles from './Featured.module.css'

const FeaturedPosts = ({ featured }) => {
  return (
    <>
      <h3>Zobacz także</h3>
      {featured?.map((feat) => (
        <div key={feat.id}>
          <Link href={`/posts/[slug]`} as={`/posts/${feat.slug}`}>
            <a>
              <PostItem post={feat} />
            </a>
          </Link>
        </div>
      ))}
    </>
  )
}

export default FeaturedPosts
