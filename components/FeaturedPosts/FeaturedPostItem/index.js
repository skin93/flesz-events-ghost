import Link from 'next/link'
import React from 'react'
import { FeatTitle, FeaturedCard, FeaturedImg } from './FeaturedPostItem.styled'

const FeaturedPostItem = ({ feat }) => {
  return (
    <Link key={feat.id} href={`/posts/${feat.slug}`}>
      <a>
        <FeaturedCard>
          <FeaturedImg src={feat.feature_image} alt='Feature image' />
          <FeatTitle>{feat.title}</FeatTitle>
        </FeaturedCard>
      </a>
    </Link>
  )
}

export default FeaturedPostItem
