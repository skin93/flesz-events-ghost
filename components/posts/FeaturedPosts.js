import React from 'react'
import Link from 'next/link'
import FeaturedPostItem from './FeaturedPostItem'
import styled from 'styled-components'
import { device } from '../../styles/device'

const FeaturedPostsContainer = styled.div`
  display: grid;
  gap: 10px;
  place-items: center;

  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(1, 1fr);
  }
`

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
