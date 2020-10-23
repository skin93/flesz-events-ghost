import React from 'react'
import Link from 'next/link'
import FeaturedPostItem from './FeaturedPostItem'

const FeaturedPosts = ({ featured }) => {
  return (
    <>
      <h3>Zobacz także</h3>
      {featured?.map((feat) => (
        <div key={feat.id}>
          <Link href={`/posts/[slug]`} as={`/posts/${feat.slug}`}>
            <a>
              <FeaturedPostItem featured={feat} />
            </a>
          </Link>
        </div>
      ))}
    </>
  )
}

export default FeaturedPosts
