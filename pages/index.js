import { useEffect } from 'react'
import { getPosts } from './api/posts'
import { listPosts } from '../store/actions/postActions'
import { useDispatch, useSelector } from 'react-redux'
import Posts from '../components/posts/Posts'

import styles from './IndexPage.module.css'

const IndexPage = () => {
  const dispatch = useDispatch()
  const { posts, loading, error } = useSelector((state) => state.postList)
  useEffect(() => {
    dispatch(listPosts())
  }, [dispatch])
  return (
    <>
      <h3 className={styles.postsHeader}>Ostatnio dodane</h3>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Posts posts={posts} />
      )}
    </>
  )
}

// export const getServerSideProps = async () => {
//   const dispatch = useDispatch()
//   const postList = useSelector((state) => state.postList)
//   const { posts, loading, error } = postList
//   dispatch(listPosts())
//   // const posts = await getPosts()
//   return { props: { posts, loading, error } }
// }

export default IndexPage
