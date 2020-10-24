import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getTag } from '../../store/actions/tagActions'
import PostItem from '../../components/posts/PostItem'

import styles from './[slug].module.css'

const Tag = () => {
  const dispatch = useDispatch()
  const { loading, error, tag } = useSelector((state) => state.tagSingle)

  const router = useRouter()

  const { slug } = router.query

  useEffect(() => {
    dispatch(getTag(slug))
  }, [dispatch, slug])

  return (
    <section className={styles.tagsContainer}>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>{tag.name}</div>
      )}
    </section>
  )
}

export default Tag
