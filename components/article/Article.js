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

      <ArticleExcerpt>{data.excerpt}</ArticleExcerpt>
      <BorderBottom />
      <ArticleContent dangerouslySetInnerHTML={{ __html: data.html }} />
      <BorderBottom />
    </div>
  )
}

export default Article
