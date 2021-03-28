import Link from 'next/link'
import React from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Published,
  Badge,
  ImgOverlay
} from '../../UI/BaseCard/BaseCard.styled.js'
import moment from 'moment'

const PostItem = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <Card>
          <CardImg src={post.feature_image} alt={post.title} />
          <ImgOverlay />
          <Badge>{post.primary_tag.name}</Badge>
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
