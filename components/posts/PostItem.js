import Link from 'next/link'
import React from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardOverlay,
  CardTitle,
  Published,
  Badge,
  BadgeName
} from '../UI/BaseCard'
import moment from 'moment'

const PostItem = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <Card>
          <CardImg src={post.feature_image} alt={post.title} />
          <Badge>
            <BadgeName>{post.primary_tag.name}</BadgeName>
          </Badge>
          <CardBody>
            <CardTitle>{post.title}</CardTitle>
            <Published>
              {moment(post.published_at).format('DD-MM-YYYY')}
            </Published>
          </CardBody>
        </Card>
      </a>
    </Link>
  )
}

export default PostItem
