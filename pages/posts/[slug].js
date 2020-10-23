import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { getSinglePost } from '../../store/actions/postActions'
import styles from './[slug].module.css'

const PostPage = () => {
  const dispatch = useDispatch()

  const { loading, error, post } = useSelector((state) => state.postSingle)

  const router = useRouter()

  const { slug } = router.query

  useEffect(() => {
    dispatch(getSinglePost(slug))
  }, [dispatch, slug])
  return (
    <article className={styles.postPage}>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div
            className={styles.postImg}
            style={{
              backgroundImage: `url(${post.feature_image})`,
            }}
          >
            <h1 className={styles.postTitle}>{post.title}</h1>
            <div className={styles.postImgOverlay} />
          </div>
          <p className={styles.postExcerpt}>{post.excerpt}</p>
          <div
            className={styles.postHtml}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </>
      )}
    </article>
  )
}

export default PostPage
