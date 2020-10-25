import React from 'react'
import Link from 'next/link'
import FeaturedPostItem from './FeaturedPostItem'
import FeaturedPostsContainer from './FeaturedPostsContainer'

const FeaturedPosts = ({ featured }) => {
  return (
    <FeaturedPostsContainer>
      {featured?.map((feat) => (
        <div key={feat.id}>
          <Link href={`/posts/${feat.slug}`}>
            <a>
              <FeaturedPostItem featured={feat} />
            </a>
          </Link>
        </div>
      ))}
    </FeaturedPostsContainer>
  )
}

export default FeaturedPosts
