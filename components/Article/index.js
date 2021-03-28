import {
  ArticleImg,
  ArticleExcerpt,
  BorderBottom,
  ArticleContent
} from './Article.styled'

const Article = ({ post }) => {
  return (
    <section>
      <ArticleImg src={post.feature_image} alt={post.title} />
      <ArticleExcerpt>{post.excerpt}</ArticleExcerpt>
      <BorderBottom />
      <ArticleContent dangerouslySetInnerHTML={{ __html: post.html }} />
      <BorderBottom />
    </section>
  )
}

export default Article
