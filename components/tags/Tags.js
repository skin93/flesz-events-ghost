import React from 'react'
import styled from 'styled-components'
import { device } from '../../constants/device'
import TagItem from './TagItem'

const TagsContainer = styled.div`
  display: grid;
  gap: 5px;
  justify-items: center;

  @media ${device.mobileS} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(5, 1fr);
  }
`

const Tags = ({ tags }) => {
  return (
    <TagsContainer>
      {tags?.map((tag) => (
        <TagItem key={tag.name} tag={tag} />
      ))}
    </TagsContainer>
  )
}

export default Tags
