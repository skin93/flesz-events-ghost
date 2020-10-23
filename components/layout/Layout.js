import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listPostsFeatured } from '../../store/actions/postActions'
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
    dispatch(listPostsFeatured())
  }, [dispatch])
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <section className={styles.content}>{children}</section>
        <section className={styles.featuredPosts}>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <FeaturedPosts featured={featured} />
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Layout
