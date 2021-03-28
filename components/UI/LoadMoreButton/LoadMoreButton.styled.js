import styled from 'styled-components'
export const LoadMoreButton = styled.button`
  color: ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.accent};
  font-weight: bold;
  padding: 10px 20px;
  margin: 30px auto;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:disabled {
    color: ${({ theme }) => theme.dark};
    background-color: ${({ theme }) => theme.muted};
  }

  &:focus {
    outline: none;
  }
`
