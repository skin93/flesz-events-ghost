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

const IndexPage = (props) => {
  const {
    data
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { initialData: props.data }
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

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}`
  )
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}

export default IndexPage
