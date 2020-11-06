import styled, { keyframes } from 'styled-components'

const upAndDown = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-50px);
  }

  100% {
    transform: translateY(0)
  }
`

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
  animation: ${upAndDown} 3s infinite;
`
