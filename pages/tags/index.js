import SEO from '../../components/seo/SEO'
import Tags from '../../components/tags/Tags'
import { Error, Pagination } from '../../components/index'

const TagsPage = ({ tags, meta: { pagination }, errors }) => {
  if (errors) return <Error message='Brak tagów' />
  return (
    <>
      <SEO title='Tagi' description='Zbiór wszystkich tagów.' />
      <h1>Tagi</h1>
      <Tags tags={tags} />
      <Pagination pagination={pagination} location='/tags' />
    </>
  )
}

export async function getServerSideProps({ query }) {
  const page = query.page || 1
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/tags/?key=${process.env.NEXT_PUBLIC_API_KEY}&limit=6&page=${page}`
  )
  const data = await res.json()

  return {
    props: {
      tags: data.tags && data.tags.length > 0 ? data.tags : null,
      errors:
        !data || (data.errors && data.errors.length > 0)
          ? data.errors[0]
          : null,
      meta: data.meta
    }
  }
}

export default TagsPage
