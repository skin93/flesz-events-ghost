import { DiscussionEmbed } from 'disqus-react'
const DisqusComments = ({ post }) => {
  const disqusShortname = `${process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}`
  const disqusConfig = {
    url: `${process.env.NEXT_PUBLIC_APP_DOMAIN_PROD}/posts/${post.slug}`,
    identifier: post.id, // Single post id
    title: post.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  )
}
export default DisqusComments
