import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const StyledLink = styled.div`
  color: ${(props) => (props.active ? 'var(--light)' : 'gray')};
  transition: color 0.2s ease-in;
  &:hover {
    color: var(--light);
  }
`

const BaseLink = ({ label, to }) => {
  const router = useRouter()
  console.log(router.query.slug)
  return (
    <StyledLink active={router.asPath === `/tags/${to}` ? true : false}>
      <Link href={`/tags/${to}`}>
        <a>{label}</a>
      </Link>
    </StyledLink>
  )
}

export default BaseLink
