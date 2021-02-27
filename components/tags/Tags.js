import React from 'react'
import styled from 'styled-components'
import { device } from '../../constants/device'
import TagItem from './TagItem'

const TagsContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const Tags = ({ tags }) => {
  return (
    <TagsContainer>
      {tags.map((tag) => (
        <TagItem key={tag.name} tag={tag} />
      ))}
    </TagsContainer>
  )
}

export default Tags
