import React from 'react'
import styled from 'styled-components'

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
  position: absolute;
  /* width: 100%; */
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  color: var(--light);
  text-transform: uppercase;
  margin: 0;
`

const ImgOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`

const ArticleExcerpt = styled.p`
  font-size: 1.2rem;
  color: var(--light);
`

const ArticleContent = styled.div`
  color: var(--light);

  & > p {
    font-size: 1.3rem;
    & > strong {
      color: var(--orange);
    }
  }
`

const Article = ({ data }) => {
  return (
    <div style={{ margin: '30px' }}>
      <ArticleImg
        style={{
          backgroundImage: `url(${data.feature_image})`
        }}
      >
        <ArticleTitle>{data.title}</ArticleTitle>
        <ImgOverlay />
      </ArticleImg>
      <ArticleExcerpt>{data.excerpt}</ArticleExcerpt>
      <ArticleContent dangerouslySetInnerHTML={{ __html: data.html }} />
    </div>
  )
}

export default Article
