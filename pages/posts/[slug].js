// Import getSinglePost function
import { getSinglePost } from '../api/posts'

// PostPage page component
const PostPage = (props) => {
  // Render post title and content in the page from props
  return (
    <div>
      <h1>{props.post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
    </div>
  )
}

export default PostPage

PostPage.getInitialProps = async (params) => {
  const post = await getSinglePost(params.query.slug)
  return { post: post }
}
