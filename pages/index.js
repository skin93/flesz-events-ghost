import Link from 'next/link'
import styles from './IndexPage.module.css'

import { getPosts } from './api/posts'
import PostItem from '../components/posts/PostItem'

const IndexPage = ({ posts }) => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.posts}>
        {posts.map((post) => (
          <div key={post.id}>
            <Link href={`/posts/[slug]`} as={`/posts/${post.slug}`}>
              <a>
                <PostItem post={post} />
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.featured}></div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const posts = await getPosts()
  return { props: { posts } }
}

export default IndexPage
