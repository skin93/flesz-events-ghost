import React from 'react'
import Link from 'next/link'

const BaseLink = ({ label, to }) => {
  return (
    <Link href='/tags/[slug]' as={`/tags/${to}`}>
      <a>{label}</a>
    </Link>
  )
}

export default BaseLink
