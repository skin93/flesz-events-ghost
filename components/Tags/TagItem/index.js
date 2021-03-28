import Link from 'next/link'
import React from 'react'
import { HashTag, TagBody, TagName } from './Tag.styled'

const TagItem = ({ tag }) => {
  return (
    <Link href={`/tags/${tag.slug}`}>
      <a>
        <TagBody>
          <TagName>
            <HashTag>#</HashTag>
            {tag.name}
          </TagName>
        </TagBody>
      </a>
    </Link>
  )
}

export default TagItem
