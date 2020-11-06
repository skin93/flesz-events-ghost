import Posts from '../components/posts/Posts'
import styled from 'styled-components'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { Pagination } from '../components/index'
import SEO from '../components/seo/SEO'

const LatestPosts = styled.section``

const Header = styled.h1`
  text-align: center;
  max-width: 100%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.light};
`

const IndexPage = ({ content }) => {
  const router = useRouter()
  const page = router.query.page || 1
  const {
    data
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}&limit=6&include=tags&page=${page}`,
    { initialData: content }
  )

  const posts = data.posts
  const meta = data.meta

  const { pagination } = meta

  return (
    <>
      <SEO
        title={process.env.NEXT_PUBLIC_APP_NAME}
        description='Jesteśmy sKoncertowani na muzyce!'
      />
      <LatestPosts>
        <Header>Ostatnie wpisy</Header>
        <Posts posts={posts} />
        <Pagination pagination={pagination} location='/' />
      </LatestPosts>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const page = query.page || 1
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}&limit=6&include=tags&page=${page}`
  )
  const content = await res.json()

  return {
    props: {
      content
    }
  }
}

export default IndexPage
