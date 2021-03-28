import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { StyledLink } from './BaseLink.styled'

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
