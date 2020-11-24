import styled from 'styled-components'
import { device } from '../../constants/device'

export const ArticleImg = styled.div`
  width: 100%;
  height: 200px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  margin-top: 30px;
  border-radius: 10px;

  @media ${device.tablet} {
    height: 500px;
  }
`

export const ArticleTitle = styled.h1`
  text-align: center;
  width: 100%;
  font-size: 2rem;
  color: ${({ theme }) => theme.light};

  @media ${device.laptopL} {
    font-size: 4rem;
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
