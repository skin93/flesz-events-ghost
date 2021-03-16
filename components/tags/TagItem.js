import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const TagBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 5px;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.black};
  }
`

const TagName = styled.h3`
  color: ${({ theme }) => theme.light};
  margin: 0;
`

const HashTag = styled.span`
  color: ${({ theme }) => theme.accent};
`

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
