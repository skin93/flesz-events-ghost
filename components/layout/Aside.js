import React from 'react'
import { useFeaturedPosts } from '../../fetchers/posts/index'

import styled from 'styled-components'
import BaseError from '../UI/BaseError'
import FeaturedPosts from '../posts/FeaturedPosts'

const AsideContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  /* justify-content: center; */
  /* flex: 1; */
  overflow: hidden;
  padding: 30px;
  min-height: 200px;
  max-width: 100%;

  & > h2 {
    text-align: center;
    color: var(--light);
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
        <div>Loading...</div>
      ) : isError ? (
        <BaseError>{isError}</BaseError>
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
