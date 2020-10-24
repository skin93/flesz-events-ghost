import React from 'react'
import styles from './Footer.module.css'
import Container from '../layout/Container'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <ul className={styles.footerContent}>
          <li className={styles.info}>Informacje</li>
          <li className={styles.contact}>Kontakt</li>
          <li className={styles.tags}>Tagi</li>
        </ul>
      </Container>
    </footer>
  )
}

export default Footer
