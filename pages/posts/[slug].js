import Article from '../../components/article/Article'
import Aside from '../../components/layout/Aside'
import FeaturedPosts from '../../components/posts/FeaturedPosts'
import PageContainer from '../../components/layout/PageContainer'

const PostPage = ({ post, posts, meta }) => {
  return (
    <PageContainer>
      <Article data={post} />
      <Aside>
        <FeaturedPosts featured={posts} />
      </Aside>
    </PageContainer>
  )
}

export async function getServerSideProps({ params }) {
  const res1 = await fetch(
    `${process.env.NEXT_PUBLIC_API}/posts/slug/${params.slug}?key=${process.env.NEXT_PUBLIC_API_KEY}`
  )
  const data1 = await res1.json()

  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_API}/posts/?key=${process.env.NEXT_PUBLIC_API_KEY}&filter=featured:true`
  )
  const data2 = await res2.json()

  return {
    props: {
      post: data1.posts[0],
      posts: data2.posts,
      meta: data2.meta
    }
  }
}

export default PostPage
