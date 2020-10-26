import { useEffect } from 'react'
import { getPosts } from '../store/actions/postActions'
import { useDispatch, useSelector } from 'react-redux'
import Posts from '../components/posts/Posts'
import styled from 'styled-components'
import BaseLoader from '../components/UI/BaseLoader'
import BaseError from '../components/UI/BaseError'

const LatestPosts = styled.section``

const Header = styled.h2`
  text-align: center;
  max-width: 100%;
  text-transform: uppercase;
  color: var(--light);
`

const IndexPage = () => {
  const dispatch = useDispatch()
  const { posts, loading, error } = useSelector((state) => state.postList)
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
  return (
    <>
      {loading ? (
        <BaseLoader />
      ) : error ? (
        <BaseError error={error} />
      ) : (
        <LatestPosts>
          <Header>Najnowsze wpisy</Header>
          <Posts posts={posts} />
        </LatestPosts>
      )}
    </>
  )
}

export default IndexPage
