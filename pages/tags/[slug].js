import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getTag } from '../../store/actions/tagActions'
import { getPostsByTag } from '../../store/actions/postActions'

import Posts from '../../components/posts/Posts'

import styled from 'styled-components'

const PostsByTag = styled.section``

const TagName = styled.h2`
  text-align: center;
  text-transform: uppercase;
`

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
    <PostsByTag>
      <TagName>{tag.name}</TagName>
      {loading || loadingPostListByTag ? (
        <div>Loading...</div>
      ) : error || errorPostListByTag ? (
        <div>{error}</div>
      ) : (
        <>
          <Posts posts={postsByTag} />
        </>
      )}
    </PostsByTag>
  )
}

export default Tag
