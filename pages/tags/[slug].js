import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getTag } from '../../store/actions/tagActions'
import { getPostsByTag } from '../../store/actions/postActions'
import PostItem from '../../components/posts/PostItem'

import styles from './[slug].module.css'

const Tag = () => {
  const dispatch = useDispatch()
  const { loading, error, tag } = useSelector((state) => state.tagSingle)
  const {
    loading: loadingPostListByTag,
    error: errorPostListByTag,
    postsByTag,
  } = useSelector((state) => state.postListByTag)

  const router = useRouter()

  const { slug } = router.query

  useEffect(() => {
    dispatch(getTag(slug))
    dispatch(getPostsByTag(slug))
  }, [dispatch, slug])

  return (
    <section className={styles.tagContainer}>
      <div className={styles.tagHeader}>
        {loading || loadingPostListByTag ? (
          <div>Loading...</div>
        ) : error || errorPostListByTag ? (
          <div>{error}</div>
        ) : (
          <>
            <h2 className={styles.tagName}>{tag.name}</h2>
            <div className={styles.postsContainer}>
              {postsByTag.map((post) => (
                <div className={styles.post} key={post.id}>
                  <Link href={`/posts/[slug]`} as={`/posts/${post.slug}`}>
                    <a>
                      <PostItem post={post} />
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Tag
