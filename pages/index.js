import { useEffect } from 'react'
import { getPosts } from '../store/actions/postActions'
import { useDispatch, useSelector } from 'react-redux'
import Posts from '../components/posts/Posts'
import styled from 'styled-components'

const LatestPosts = styled.section``

const Header = styled.h2`
  text-align: center;
  text-transform: uppercase;
`

const IndexPage = () => {
  const dispatch = useDispatch()
  const { posts, loading, error } = useSelector((state) => state.postList)
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
  return (
    <LatestPosts>
      <Header>Najnowsze wpisy</Header>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Posts posts={posts} />
      )}
    </LatestPosts>
  )
}

export default IndexPage
