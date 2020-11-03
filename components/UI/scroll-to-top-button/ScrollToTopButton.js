import styled from 'styled-components'

export default styled.div`
  opacity: ${(props) => (props.showButton ? 1 : 0)};
  position: fixed;
  bottom: 50px;
  right: 0;
  z-index: 99;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.accent};
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;
  transition: opacity 0.3s ease-in-out;
`
