import styled from 'styled-components'
import { device } from '../../constants/device'

export const ArticleImg = styled.div`
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  border-radius: 10px;
`

export const ArticleTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  min-width: 100%;
  color: ${({ theme }) => theme.light};

  @media ${device.laptopL} {
    font-size: 4rem;
  }
`

export const ArticleExcerpt = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.light};
`

export const BorderBottom = styled.div`
  background-color: ${({ theme }) => theme.orange};
  height: 3px;
  width: 100%;
`

export const ArticleContent = styled.div`
  color: ${({ theme }) => theme.light};

  & > h2 {
    font-size: 2rem;
    @media ${device.laptopL} {
      font-size: 3rem;
    }
  }

  & > p {
    font-size: 1.3rem;
    & > strong {
      color: ${({ theme }) => theme.orange};
    }
  }
`
