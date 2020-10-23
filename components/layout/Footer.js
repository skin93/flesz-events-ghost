import React from 'react'
import styles from './Footer.module.css'
import Container from '../layout/Container'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.info}>Informacje</div>
        <div className={styles.contact}>Kontakt</div>
        <div className={styles.tags}>Tagi</div>
      </Container>
    </footer>
  )
}

export default Footer
