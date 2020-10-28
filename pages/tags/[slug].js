import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { usePostsByTagSlug } from '../../fetchers/posts/index'
import { useSingleTag } from '../../fetchers/tags/index'

import Posts from '../../components/posts/Posts'
import BaseError from '../../components/UI/BaseError'
import TagItem from '../../components/tags/TagItem'

const PostsByTag = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
    <>
      {isLoading || postsIsLoading ? (
        <div>Loading...</div>
      ) : isError || postsIsError ? (
        <BaseError error='Problem to fetch posts' />
      ) : (
        <PostsByTag>
          <TagItem tag={tags[0]} />
          <Posts posts={posts} />
        </PostsByTag>
      )}
    </>
  )
}

export default Tag
