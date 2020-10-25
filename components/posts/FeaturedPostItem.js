import React from 'react'
import { Card, CardBody, CardTitle, ImgTop } from '../UI/BaseCard'

const FeaturedPostItem = ({ featured }) => {
  return (
    <Card>
      <ImgTop src={featured.feature_image} alt='Feature image' />
      <CardBody>
        <CardTitle>{featured.title}</CardTitle>
      </CardBody>
    </Card>
  )
}

export default FeaturedPostItem
