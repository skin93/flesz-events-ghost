import Posts from '../components/posts/Posts'
import styled from 'styled-components'
import BaseLoader from '../components/UI/BaseLoader'
import BaseError from '../components/UI/BaseError'
import { usePosts } from '../requests/posts/index'

const LatestPosts = styled.section``

const Header = styled.h2`
  text-align: center;
  max-width: 100%;
  text-transform: uppercase;
  color: var(--light);
`

const IndexPage = () => {
  const { data, isLoading, isError } = usePosts()
  return (
    <>
      {isLoading ? (
        <BaseLoader />
      ) : isError ? (
        <BaseError error={isError} />
      ) : (
        <LatestPosts>
          <Header>Najnowsze wpisy</Header>
          <Posts posts={data.posts} />
        </LatestPosts>
      )}
    </>
  )
}

export default IndexPage
