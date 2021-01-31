import {
  ArticleHeader,
  ArticleImg,
  ArticleExcerpt,
  BorderBottom,
  ArticleContent,
  ArticleTitle,
  Published,
  TagsContainer,
  ArticleTag
} from './Article.styled'

import DisqusComments from '../UI/Disqus'

import moment from 'moment'
import Link from 'next/link'

const Article = ({ post }) => {
  return (
    <section>
      <ArticleImg src={post.feature_image} alt={post.title} />
      <ArticleExcerpt>{post.excerpt}</ArticleExcerpt>
      <BorderBottom />
      <ArticleContent dangerouslySetInnerHTML={{ __html: post.html }} />
      <BorderBottom />
      <DisqusComments post={post} />
    </section>
  )
}

export default Article
