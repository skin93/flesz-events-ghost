import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsFeatured } from '../../store/actions/postActions'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'
import FeaturedPosts from '../posts/FeaturedPosts'
import styled from 'styled-components'
import { device } from '../../styles/device'

const MainContainer = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  min-height: 100vh;

  @media ${device.laptopL} {
    flex-direction: row;
    max-width: 1440px;
    margin: 0 auto;
  }
`

const Children = styled.section`
  flex: 3;
`

const AsideContainer = styled.section`
  display: flex;

  flex-direction: column;

  & > h3 {
    text-align: center;
  }

  @media ${device.laptopL} {
    flex-direction: column;
    flex: 1;
  }
`

const Layout = ({ children }) => {
  const dispatch = useDispatch()
  const { featured, loading, error } = useSelector(
    (state) => state.postListFeatured
  )

  useEffect(() => {
    dispatch(getPostsFeatured())
  }, [dispatch])
  return (
    <>
      <TheHeader />
      <MainContainer>
        <Children>{children}</Children>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <AsideContainer>
            <h3>Zobacz także</h3>
            <FeaturedPosts featured={featured} />
          </AsideContainer>
        )}
      </MainContainer>
      <TheFooter />
    </>
  )
}

export default Layout
