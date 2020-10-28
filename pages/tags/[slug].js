import React from 'react'
import { useRouter } from 'next/router'

import { usePostsByTagSlug } from '../../fetchers/posts/index'
import { useSingleTag } from '../../fetchers/tags/index'

import Posts from '../../components/posts/Posts'

import styled from 'styled-components'
import BaseError from '../../components/UI/BaseError'

const PostsByTag = styled.section``

const TagName = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: var(--light);
`

const Tag = () => {
  const router = useRouter()

  const { slug } = router.query

  const { tags, isLoading, isError } = useSingleTag(slug)

  const {
    posts,
    isLoading: postsIsLoading,
    isError: postsIsError
  } = usePostsByTagSlug(slug)

  return (
    <PostsByTag>
      {/* <TagName>{tags[0].name}</TagName> */}
      {isLoading || postsIsLoading ? (
        <div>Loading...</div>
      ) : isError || postsIsError ? (
        <BaseError error='Problem to fetch posts' />
      ) : (
        <>
          <Posts posts={posts} />
        </>
      )}
    </PostsByTag>
  )
}

export default Tag
