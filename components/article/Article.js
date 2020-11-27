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
          {post.authors.map((author) => (
            <div>{author.name}</div>
          ))}
          <div>|</div>
          <div>{moment(post.published_at).format('DD-MM-YYYY hh:mm')}</div>
          <div>|</div>
          <TagsContainer>
            {post.tags &&
              post.tags.length > 0 &&
              post.tags.map((tag) => (
                <Link key={tag.id} href={`/tags/${tag.slug}?page=1`}>
                  <a>
                    <ArticleTag>
                      <span>#</span>
                      <p>{tag.name}</p>
                    </ArticleTag>
                  </a>
                </Link>
              ))}
          </TagsContainer>
        </Published>
      </ArticleHeader>
      <ArticleImg src={post.feature_image} alt={pos.title} />
      <ArticleExcerpt>{post.excerpt}</ArticleExcerpt>
      <BorderBottom />
      <ArticleContent dangerouslySetInnerHTML={{ __html: post.html }} />
      <BorderBottom />
      <DisqusComments post={post} />
    </section>
  )
}

export default Article
