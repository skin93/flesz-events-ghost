import Link from 'next/link'
import React from 'react'
import Container from './Container'
import BaseLink from '../UI/BaseLink'
import styles from './Header.module.css'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <header className={styles.navbar}>
      <Container>
        <div className={styles.logo}>
          <Link href='/'>
            <a className={styles.brand}>Logo</a>
          </Link>
        </div>
        <ul className={styles.nav}>
          <BaseLink to='newsy' label='Newsy' style={styles.navItem} />
          <BaseLink to='recenzje' label='Recenzje' style={styles.navItem} />
          <BaseLink to='relacje' label='Relacje' style={styles.navItem} />
          <BaseLink to='polecamy' label='Polecamy' style={styles.navItem} />
          <BaseLink to='patronat' label='Patronat' style={styles.navItem} />
        </ul>
        <div className={styles.social}>
          <Link href='https://facebook.com/flesz-events'>
            <a>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </Link>
        </div>
      </Container>
    </header>
  )
}

export default Header
