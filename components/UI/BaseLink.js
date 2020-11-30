import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const StyledLink = styled.div`
  color: ${(props) => (props.active ? props.theme.accent : props.theme.light)};
  transition: color 0.2s ease-in;
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`

const BaseLink = ({ label, to }) => {
  const router = useRouter()
  return (
    <StyledLink active={router.asPath === `/tags/${to}?page=1` ? true : false}>
      <Link href={`/tags/${to}?page=1`}>
        <a>{label}</a>
      </Link>
    </StyledLink>
  )
}

export default BaseLink
