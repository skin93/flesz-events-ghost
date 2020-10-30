import Posts from '../components/posts/Posts'
import styled from 'styled-components'
import BaseLoader from '../components/UI/BaseLoader'
import BaseError from '../components/UI/BaseError'
import { usePosts } from '../fetchers/posts/index'

const LatestPosts = styled.section``

const Header = styled.h2`
  text-align: center;
  max-width: 100%;
  text-transform: uppercase;
  font-size: 3rem;
  color: ${({ theme }) => theme.light};
`

const IndexPage = () => {
  const { posts, isLoading, isError } = usePosts()
  return (
    <>
      {isLoading ? (
        <BaseLoader />
      ) : isError ? (
        <BaseError error='Problem to fetch posts' />
      ) : (
        <LatestPosts>
          <Header>Ostatnie wpisy</Header>
          <Posts posts={posts} />
        </LatestPosts>
      )}
    </>
  )
}

export default IndexPage
