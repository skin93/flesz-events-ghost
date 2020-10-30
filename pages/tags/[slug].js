import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { usePostsByTagSlug } from '../../fetchers/posts/index'
import { useSingleTag } from '../../fetchers/tags/index'

import Posts from '../../components/posts/Posts'
import BaseLoader from '../../components/UI/BaseLoader'
import BaseError from '../../components/UI/BaseError'

const PostsByTag = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  h2 {
    text-align: center;
    text-transform: uppercase;
    font-size: 3rem;
    color: ${({ theme }) => theme.light};
  }

  span {
    color: ${({ theme }) => theme.orange};
  }
`

const TagPage = () => {
  const router = useRouter()

  const { slug } = router.query

  const { tags, isLoading, isError } = useSingleTag(slug)

  const name = tags && tags.length > 0 ? tags[0].name : null

  const {
    posts,
    isLoading: postsIsLoading,
    isError: postsIsError
  } = usePostsByTagSlug(slug)

  return (
    <>
      {isLoading || postsIsLoading ? (
        <BaseLoader />
      ) : isError | postsIsError ? (
        <BaseError error='Failed to fetch' />
      ) : (
        <PostsByTag>
          <h2>
            <span>#</span> {name}
          </h2>
          <Posts posts={posts} />
        </PostsByTag>
      )}
    </>
  )
}

export default TagPage
