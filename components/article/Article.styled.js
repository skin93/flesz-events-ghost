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
  text-align: left;
  width: 100%;
  font-size: 2rem;
  margin-bottom: 0;
  color: ${({ theme }) => theme.light};

  @media ${device.laptopL} {
    font-size: 3rem;
  }
`

export const ArticleExcerpt = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.light};
  font-weight: bold;
`

export const BorderBottom = styled.div`
  background-color: ${({ theme }) => theme.accent};
  height: 3px;
  width: 100%;
`

export const Published = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div {
    margin: 0 5px;
    font-family: 'Oswald';
    font-size: 1rem;

    &:nth-child(even) {
      color: ${({ theme }) => theme.accent};
    }
  }
`

export const ArticleContent = styled.div`
  color: ${({ theme }) => theme.light};

  h2 {
    font-size: 2rem;
    @media ${device.laptopL} {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.2rem;
    strong {
      color: ${({ theme }) => theme.light};
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

export const ArticleTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;

  span {
    color: ${({ theme }) => theme.accent};
  }

  p {
    font-family: 'Oswald';
    margin: 0;
  }
`
