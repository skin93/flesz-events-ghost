import { DiscussionEmbed } from 'disqus-react'
import { DisqusWrapper } from './Disqus.styled'

const DisqusComments = ({ post }) => {
  const disqusShortname = `${process.env.NEXT_PUBLIC_DISQUS_SHORTNAME}`
  const disqusConfig = {
    url: `${process.env.NEXT_PUBLIC_APP_DOMAIN_PROD}/posts/${post.slug}`,
    identifier: post.id,
    title: post.title
  }
  return (
    <DisqusWrapper>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </DisqusWrapper>
  )
}
export default DisqusComments
