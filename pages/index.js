import { getPosts } from './api/posts'
import Posts from '../components/posts/Posts'

import styles from './IndexPage.module.css'

const IndexPage = ({ posts }) => {
  return (
    <>
      <h3 className={styles.postsHeader}>Ostatnio dodane</h3>
      <Posts posts={posts} />
    </>
  )
}

export const getServerSideProps = async () => {
  const posts = await getPosts()
  return { props: { posts } }
}

export default IndexPage
