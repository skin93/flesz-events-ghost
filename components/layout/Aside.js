import React from 'react'
import { useFeaturedPosts } from '../../fetchers/posts/index'

import styled from 'styled-components'
import FeaturedPosts from '../posts/FeaturedPosts'
import BaseError from '../UI/BaseError'
import BaseLoader from '../UI/BaseLoader'

const AsideContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;
  padding: 30px;
  min-height: 200px;
  max-width: 100%;

  & > h2 {
    text-align: center;
    color: ${({ theme }) => theme.light};
    margin: 0;
    font-size: 2rem;
    padding: 10px;
  }
`

const Aside = () => {
  const { posts, isLoading, isError } = useFeaturedPosts()

  return (
    <>
      {isLoading ? (
        <BaseLoader />
      ) : isError ? (
        <BaseError error='Failed to fetch' />
      ) : (
        <AsideContainer>
          <h2>Zobacz także</h2>
          <FeaturedPosts featured={posts} />
        </AsideContainer>
      )}{' '}
    </>
  )
}

export default Aside
