import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsFeatured } from '../../store/actions/postActions'

import styled from 'styled-components'

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
  const dispatch = useDispatch()
  const { featured, loading, error } = useSelector(
    (state) => state.postListFeatured
  )

  useEffect(() => {
    dispatch(getPostsFeatured())
  }, [dispatch])
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <AsideContainer>
          <h2>Zobacz także</h2>
          <FeaturedPosts featured={featured} />
        </AsideContainer>
      )}{' '}
    </>
  )
}

export default Aside
