import styled from 'styled-components'

import SEO from '../../components/seo/SEO'
import Posts from '../../components/posts/Posts'
import { Pagination } from '../../components/index'
import { Error } from '../../components/index'

const PostsByTag = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  span {
    color: ${({ theme }) => theme.accent};
  }
`

const TagPage = ({ tag, posts, meta: { pagination }, errors }) => {
  if (errors) return <Error message='Brak postów' />

  return (
    <>
      <SEO title={tag.name} description={tag.description} />
      <PostsByTag>
        <h1>
          <span>#</span>
          {tag.name}
        </h1>
        <Posts posts={posts} />
        <Pagination pagination={pagination} location={`/tags/${tag.slug}`} />
      </PostsByTag>
    </>
  )
}

export async function getServerSideProps({ query, params }) {
  const page = query.page || 1
  const res1 = await fetch(
    `${process.env.API}/tags/slug/${params.slug}?key=${process.env.API_KEY}`
  )
  const data1 = await res1.json()

  const res2 = await fetch(
    `${process.env.API}/posts/?key=${process.env.API_KEY}&limit=6&filter=primary_tag:${params.slug}&include=tags&page=${page}`
  )
  const data2 = await res2.json()

  return {
    props: {
      tag: data1.tags && data1.tags.length > 0 ? data1.tags[0] : null,
      errors:
        !data1 || (data1.errors && data1.errors.length > 0)
          ? data1.errors[0]
          : null,
      posts: data2.posts,
      meta: data2.meta
    }
  }
}

export default TagPage
