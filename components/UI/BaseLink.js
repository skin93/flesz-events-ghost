import React from 'react'
import Link from 'next/link'

const BaseLink = ({ label, style, to }) => {
  return (
    <li className={style}>
      <Link href={`/${to}`}>
        <a>{label}</a>
      </Link>
    </li>
  )
}

export default BaseLink
