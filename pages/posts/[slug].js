import { getSinglePost } from '../api/posts'

const PostPage = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const getServerSideProps = async ({ query: { slug } }) => {
  const post = await getSinglePost(slug)
  return { props: { post } }
}

export default PostPage
