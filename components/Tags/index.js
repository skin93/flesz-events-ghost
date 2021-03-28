import React from 'react'
import TagItem from './TagItem'
import { TagsContainer } from './Tags.styled'

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
