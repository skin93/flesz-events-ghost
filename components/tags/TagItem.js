import React from 'react'
import styled from 'styled-components'

const TagBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 100%;
`

const TagName = styled.h2`
  color: ${({ theme }) => theme.light};
  font-weight: bold;
  text-transform: uppercase;
`

const TagDescription = styled.p`
  color: ${({ theme }) => theme.light};
  font-size: 1.3rem;
  text-align: center;
`

const TagItem = ({ tag }) => {
  return (
    <TagBody>
      <TagName>{tag.name}</TagName>
      <TagDescription>{tag.description}</TagDescription>
    </TagBody>
  )
}

export default TagItem
