import React from 'react'
import styled from 'styled-components'

const Error = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  cursor: pointer;
`

const ErrorContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  background-color: ${({ theme }) => theme.light};
  border-radius: 10px;
  color: ${({ theme }) => theme.black};
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BaseError = ({ error }) => {
  return (
    <Error>
      <ErrorContent>{error}</ErrorContent>
    </Error>
  )
}

export default BaseError
