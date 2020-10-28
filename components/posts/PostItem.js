import Link from 'next/link'
import React from 'react'
import { Card, CardBody, CardTitle, ImgTop } from '../UI/BaseCard'

const PostItem = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <Card>
          <ImgTop src={post.feature_image} alt='Feature image' />
          <CardBody>
            <CardTitle>{post.title}</CardTitle>
          </CardBody>
        </Card>
      </a>
    </Link>
  )
}

export default PostItem
