import React from 'react'
import { StyledError } from './Error.styled'

const Error = ({ message }) => {
  return (
    <StyledError>
      <div>{message}</div>
    </StyledError>
  )
}

export default Error
