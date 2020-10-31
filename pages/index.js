import Posts from '../components/posts/Posts'
import styled from 'styled-components'
import useSWR from 'swr'

const LatestPosts = styled.section``

const Header = styled.h2`
  text-align: center;
  max-width: 100%;
  text-transform: uppercase;
  font-size: 3rem;
  color: ${({ theme }) => theme.light};
`

const IndexPage = () => {
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}`
  )

  return (
    <>
      {data && (
        <LatestPosts>
          <Header>Ostatnie wpisy</Header>
          <Posts posts={data.posts} />
        </LatestPosts>
      )}
    </>
  )
}

export default IndexPage
