import styled from 'styled-components'
export default styled.button`
  color: ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.accent};
  padding: 10px 20px;
  margin: 30px auto;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:disabled {
    color: ${({ theme }) => theme.light};
    background-color: ${({ theme }) => theme.black};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.light};
  }
`
