import styled from 'styled-components'
import { device } from '../../constants/device'

export const ArticleHeader = styled.div`
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.light};
`

export const ArticleImg = styled.img`
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-top: 30px;
  border-radius: 10px;
  object-fit: cover;

  @media ${device.tablet} {
    height: 500px;
  }
`

export const ArticleTitle = styled.h1`
  text-align: center;
  width: 100%;
  font-size: 2rem;
  margin-bottom: 0;
  color: ${({ theme }) => theme.light};

  @media ${device.tablet} {
    font-size: 3rem;
  }
`

export const ArticleExcerpt = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.light};
  font-family: 'Montserrat-Bold';

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`

export const BorderBottom = styled.div`
  background-color: ${({ theme }) => theme.accent};
  height: 3px;
  width: 100%;
`

export const Published = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid gray;

  div {
    margin: 0 5px;
    font-family: 'Oswald';
    font-size: 0.8rem;

    &:nth-child(even) {
      color: ${({ theme }) => theme.accent};
    }
  }

  @media ${device.tablet} {
    div {
      font-size: 1rem;
    }
  }
`

export const ArticleContent = styled.div`
  color: rgba(238, 238, 238, 0.75);

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    strong {
      color: ${({ theme }) => theme.light};
    }
  }

  @media ${device.tablet} {
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
    }
  }

  blockquote {
    background: ${({ theme }) => theme.gray};
    color: rgba(255, 255, 255, 0.9);
    font-family: 'Montserrat-Medium';
    font-size: 1.2rem;
    padding: 20px 30px;
    margin: 50px auto;
    line-height: 3rem;
    width: 80%;
    border-left: 3px solid ${({ theme }) => theme.accent};
    font-style: italic;

    @media ${device.tablet} {
      font-size: 1.5rem;
    }
  }
`

export const TagsContainer = styled.div`
  max-width: 100%;
  height: 50px;
  margin: 0 auto;
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
