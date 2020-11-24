import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const TagBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 100%;
  padding: 15px;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.gray};
  }
`

const TagName = styled.h2`
  color: ${({ theme }) => theme.light};
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.5rem;
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
