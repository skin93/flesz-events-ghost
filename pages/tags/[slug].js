import React from 'react'
import { useRouter } from 'next/router'

import { usePostsByTagSlug, useSinglePost } from '../../requests/posts/index'
import { useSingleTag } from '../../requests/tags/index'

import Posts from '../../components/posts/Posts'

import styled from 'styled-components'

const PostsByTag = styled.section``

const TagName = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: var(--light);
`

const Tag = () => {
  const router = useRouter()

  const { slug } = router.query

  const { data, isLoading, isError } = useSingleTag(slug)
  const {
    data: postsData,
    isLoading: postsIsLoading,
    isError: postsIsError
  } = usePostsByTagSlug(slug)

  return (
    <PostsByTag>
      <TagName>{slug}</TagName>
      {isLoading || postsIsLoading ? (
        <div>Loading...</div>
      ) : isError || postsIsError ? (
        <BaseError>{error}</BaseError>
      ) : (
        <>
          <Posts posts={postsData.posts} />
        </>
      )}
    </PostsByTag>
  )
}

export default Tag
