import React from 'react'
import { Card, CardBody, CardTitle, ImgTop } from '../UI/BaseCard'

const PostItem = ({ post }) => {
  return (
    <Card>
      <ImgTop src={post.feature_image} alt='Feature image' />
      <CardBody>
        <CardTitle>{post.title}</CardTitle>
      </CardBody>
    </Card>
  )
}

export default PostItem
