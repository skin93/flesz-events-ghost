import React from 'react'
import Header from './Header'
import Footer from './Footer'
import FeaturedPosts from '../posts/FeaturedPosts'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <section className={styles.content}>{children}</section>
        <section className={styles.featuredPosts}>
          <FeaturedPosts />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Layout
