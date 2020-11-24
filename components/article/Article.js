import {
  ArticleImg,
  ArticleExcerpt,
  BorderBottom,
  ArticleContent
} from './Article.styled'

const Article = ({ post }) => {
  return (
    <>
      <ArticleImg
        style={{
          backgroundImage: `url(${post.feature_image})`
        }}
      ></ArticleImg>

      <ArticleExcerpt>{post.excerpt}</ArticleExcerpt>
      <BorderBottom />
      <ArticleContent dangerouslySetInnerHTML={{ __html: post.html }} />
      <BorderBottom />
    </>
  )
}

export default Article
import moment from 'moment'
