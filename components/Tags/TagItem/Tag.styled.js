import styled from 'styled-components'

export const TagBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 5px;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.black};
  }
`

export const TagName = styled.h3`
  color: ${({ theme }) => theme.light};
  margin: 0;
`

export const HashTag = styled.span`
  color: ${({ theme }) => theme.accent};
`
