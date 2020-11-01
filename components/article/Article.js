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
      <ArticleTitle>{data.title}</ArticleTitle>

      <ArticleImg
        style={{
          backgroundImage: `url(${data.feature_image})`
        }}
      ></ArticleImg>
      <ArticleExcerpt>{data.excerpt}</ArticleExcerpt>
      <BorderBottom />
      <ArticleContent dangerouslySetInnerHTML={{ __html: data.html }} />
    </div>
  )
}

export default Article
