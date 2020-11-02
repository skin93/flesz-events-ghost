import {
  ArticleTitle,
  ArticleImg,
  ArticleExcerpt,
  BorderBottom,
  ArticleContent
} from './Article.styled'

const Article = ({ data }) => {
  return (
    <div>
      <ArticleImg
        style={{
          backgroundImage: `url(${data.feature_image})`
        }}
      ></ArticleImg>
      <ArticleTitle>{data.title}</ArticleTitle>

      <ArticleExcerpt>{data.excerpt}</ArticleExcerpt>
      <BorderBottom />
      <ArticleContent dangerouslySetInnerHTML={{ __html: data.html }} />
    </div>
  )
}

export default Article
