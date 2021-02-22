import styled from 'styled-components'
import { device } from '../../constants/device'

export const ArticleHeader = styled.div`
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.light};
`

export const ArticleImg = styled.img`
  width: 100%;
  margin: 30px 0;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
`

export const ArticleTitle = styled.h1`
  text-align: left;
  width: 100%;
  margin-bottom: 0;
  font-size: calc(1rem + 1.5vw);
  color: ${({ theme }) => theme.light};
`

export const ArticleExcerpt = styled.p`
  color: ${({ theme }) => theme.light};
  font-weight: bold;
`

export const BorderBottom = styled.div`
  background-color: ${({ theme }) => theme.muted};
  height: 3px;
  width: 100%;
  margin: 30px 0;
`

export const PublishedContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 3px solid rgb(156, 156, 156);

  div {
    margin: 0 5px;
    font-size: calc(0.7rem + 0.2vw);
  }
`

export const PublishedDate = styled.div``

export const PublishedAuthors = styled.div``

export const ArticleContent = styled.div`
  color: ${({ theme }) => theme.muted};

  p {
    line-height: 2rem;
    margin: 30px 0;
    strong {
      color: ${({ theme }) => theme.light};
    }
  }

  blockquote {
    background: ${({ theme }) => theme.background};
    color: rgba(255, 255, 255, 0.9);
    padding: 20px 30px;
    margin: 50px auto;
    line-height: 3rem;
    width: 80%;
    border-left: 3px solid ${({ theme }) => theme.accent};
    font-style: italic;
  }
`

export const TagsContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const ArticleTag = styled.small`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  padding: 0 5px;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.black};
  text-transform: uppercase;
  font-weight: bold;
`
