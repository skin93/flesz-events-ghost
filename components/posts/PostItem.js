import Link from 'next/link'
import React from 'react'
import {
  Card,
  CardBody,
  CardOverlay,
  CardTitle,
  Published
} from '../UI/BaseCard'
import moment from 'moment'

const PostItem = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <Card src={post.feature_image}>
          <CardOverlay />
          <CardBody>
            <CardTitle>{post.title}</CardTitle>
            <Published>
              Dodano: {moment(post.published_at).format('DD-MM-YYYY')}
            </Published>
          </CardBody>
        </Card>
      </a>
    </Link>
  )
}

export default PostItem
