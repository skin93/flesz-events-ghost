import Link from 'next/link'
import React from 'react'
import { Card, CardBody, CardTitle, ImgTop, Published } from '../UI/BaseCard'
import moment from 'moment'

const PostItem = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <Card>
          <ImgTop src={post.feature_image} alt='Feature image' />
          <CardBody>
            <CardTitle>{post.title}</CardTitle>
            <Published>
              {moment(post.published_at).format('YYYY-MM-DD')}
            </Published>
          </CardBody>
        </Card>
      </a>
    </Link>
  )
}

export default PostItem
