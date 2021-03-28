import styled from 'styled-components'

export const FeaturedCard = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 10px;

  display: flex;
  align-items: center;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`

export const FeaturedImg = styled.img`
  object-fit: cover;
  height: 66px;
  width: 100px;
  border-radius: 5px;
`

export const FeatTitle = styled.h4`
  margin: 0;
  margin-left: 20px;
  color: ${({ theme }) => theme.light};
  font-size: 1.2rem;
  transition: border 0.2s ease-out;
`
