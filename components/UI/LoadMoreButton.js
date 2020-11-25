import styled from 'styled-components'
export default styled.button`
  color: ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.accent};
  padding: 10px 20px;
  margin: 0 10px;
  font-family: 'Montserrat-Bold', sans-serif;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:disabled {
    background-color: ${({ theme }) => theme.gray};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.gray};
    color: ${({ theme }) => theme.light};
  }
`
