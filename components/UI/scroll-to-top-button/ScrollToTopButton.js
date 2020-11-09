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
  bottom: 70px;
  right: 20px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.accent};
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;
  transition: opacity 0.2s ease-in-out;
  animation: ${upAndDown} 3s infinite;
`
