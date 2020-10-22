import Link from 'next/link'

import { getPosts } from '../api/posts'

const IndexPage = (props) => (
  <ul>
    {props.posts.map((post) => (
      <li key={post.id}>
        <Link href={`/posts/[slug]`} as={`/posts/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ))}
  </ul>
)

export default IndexPage

IndexPage.getInitialProps = async () => {
  const posts = await getPosts()
  return { posts: posts }
}
