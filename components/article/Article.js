import React from 'react'
import styled from 'styled-components'
import { device } from '../../constants/device'

const ArticleImg = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  border-radius: 10px;
`

const ArticleTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  min-width: 100%;
  color: var(--light);
  text-transform: uppercase;

  @media ${device.laptopL} {
    font-size: 4rem;
  }
`

const ArticleExcerpt = styled.p`
  font-size: 1.3rem;
  color: var(--light);
`

const BorderBottom = styled.div`
  background-color: var(--orange);
  height: 3px;
  width: 100%;
`

const ArticleContent = styled.div`
  color: var(--light);

  & > h2 {
    font-size: 2rem;
    @media ${device.laptopL} {
      font-size: 3rem;
    }
  }

  & > p {
    font-size: 1.3rem;
    & > strong {
      color: var(--orange);
    }
  }
`

const Article = ({ data }) => {
  return (
    <div>
      <ArticleTitle>{data.title}</ArticleTitle>

      <ArticleImg
        style={{
          backgroundImage: `url(${data.feature_image})`
        }}
      ></ArticleImg>
      <ArticleExcerpt>{data.excerpt}</ArticleExcerpt>
      <BorderBottom />
      <ArticleContent dangerouslySetInnerHTML={{ __html: data.html }} />
    </div>
  )
}

export default Article
