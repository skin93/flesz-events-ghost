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
      <ArticleHeader>
        <ArticleTitle>{post.title}</ArticleTitle>
        <Published>
          <TagsContainer>
            {post.tags &&
              post.tags.length > 0 &&
              post.tags.map((tag) => (
                <Link key={tag.id} href={`/tags/${tag.slug}?page=1`}>
                  <a>
                    <ArticleTag>{tag.name}</ArticleTag>
                  </a>
                </Link>
              ))}
          </TagsContainer>
          <div>|</div>
          <div>{moment(post.published_at).format('DD-MM-YYYY')}</div>
          <div>|</div>
          {post.authors.map((author) => (
            <div>{author.name}</div>
          ))}
        </Published>
      </ArticleHeader>
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
