import React from 'react'
import Link from 'next/link'

const BaseLink = ({ label, style, to }) => {
  return (
    <li className={style}>
      <Link href='/tags/[slug]' as={`/tags/${to}`}>
        <a>{label}</a>
      </Link>
    </li>
  )
}

export default BaseLink
