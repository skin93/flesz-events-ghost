import { useRouter } from 'next/router'
import styled from 'styled-components'
import useSWR from 'swr'
import Posts from '../../components/posts/Posts'
import { Pagination } from '../../components/index'
import SEO from '../../components/seo/SEO'

const PostsByTag = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  h1 {
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.light};
  }

  span {
    color: ${({ theme }) => theme.accent};
  }
`

const TagPage = (props) => {
  const router = useRouter()
  const page = router.query.page || 1
  const { slug } = router.query
  const data1 = useSWR(
    `${process.env.NEXT_PUBLIC_API}/tags/slug/${slug}?key=${process.env.NEXT_PUBLIC_API_KEY}`,
    { initialData: props.data1 }
  )
  const data2 = useSWR(
    `${process.env.NEXT_PUBLIC_API}/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}&limit=6&filter=primary_tag:${slug}&include=tags&page=${page}`,
    { initialData: props.data2 }
  )

  const tag = data1.data.tags[0]
  const posts = data2.data.posts

  const meta = data2.data.meta
  const { pagination } = meta

  return (
    <>
      <SEO title={tag.name} description={tag.description} />
      <PostsByTag>
        <h1>
          <span>#</span>
          {tag.name}
        </h1>
        <Posts posts={posts} />
        <Pagination pagination={pagination} location={`/tags/${slug}`} />
      </PostsByTag>
    </>
  )
}

export async function getServerSideProps({ query, params }) {
  const page = query.page || 1
  const res1 = await fetch(
    `${process.env.NEXT_PUBLIC_API}/tags/slug/${params.slug}?key=${process.env.NEXT_PUBLIC_API_KEY}`
  )
  const data1 = await res1.json()

  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_API}/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}&limit=6&filter=primary_tag:${params.slug}&include=tags&page=${page}`
  )
  const data2 = await res2.json()

  return {
    props: {
      data1,
      data2
    }
  }
}

export default TagPage
