import { useRouter } from 'next/router'
import styled from 'styled-components'
import useSWR from 'swr'
import SEO from '../../components/seo/SEO'

import Tags from '../../components/tags/Tags'
import { Pagination } from '../../components/index'

const Header = styled.h1`
  text-align: center;
  max-width: 100%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.light};
`

const TagsPage = ({ content }) => {
  const router = useRouter()
  const page = router.query.page || 1
  const {
    data
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/tags/?key=${process.env.NEXT_PUBLIC_API_KEY}&limit=3&page=${page}`,
    { initialData: content }
  )

  const tags = data.tags
  const pagination = data.meta.pagination

  return (
    <>
      <SEO title='Tagi' description='Zbiór wszystkich tagów.' />
      <Header>Tagi</Header>
      <Tags tags={tags} />
      <Pagination pagination={pagination} location='/tags' />
    </>
  )
}

export async function getServerSideProps({ query }) {
  const page = query.page || 1
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/tags/?key=${process.env.NEXT_PUBLIC_API_KEY}&limit=3&page=${page}`
  )
  const content = await res.json()

  return {
    props: {
      content
    }
  }
}

export default TagsPage
