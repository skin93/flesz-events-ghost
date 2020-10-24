import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsFeatured } from '../../store/actions/postActions'
import Header from './Header'
import Footer from './Footer'
import FeaturedPosts from '../posts/FeaturedPosts'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  const dispatch = useDispatch()
  const { featured, loading, error } = useSelector(
    (state) => state.postListFeatured
  )

  useEffect(() => {
    dispatch(getPostsFeatured())
  }, [dispatch])
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <section className={styles.mainContent}>{children}</section>
        <section className={styles.asideContent}>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <>
              <h3 className={styles.asideHeader}>Zobacz także</h3>
              <FeaturedPosts featured={featured} />
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Layout
