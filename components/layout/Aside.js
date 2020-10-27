import React from 'react'
import { useFeaturedPosts } from '../../requests/posts/index'

import styled from 'styled-components'
import BaseError from '../UI/BaseError'
import FeaturedPosts from '../posts/FeaturedPosts'

const AsideContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  min-height: 100vh;
  max-width: 100%;

  & > h2 {
    text-align: center;
    color: var(--light);
  }
`

const Aside = () => {
  const { data, isLoading, isError } = useFeaturedPosts()
  console.log(data)

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <BaseError>{isError}</BaseError>
      ) : (
        <AsideContainer>
          <h2>Zobacz także</h2>
          <FeaturedPosts featured={data.posts} />
        </AsideContainer>
      )}{' '}
    </>
  )
}

export default Aside
