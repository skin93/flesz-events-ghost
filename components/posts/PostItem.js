import React from 'react'
import styles from './PostItem.module.css'

const PostItem = ({ post }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.imgTop}
        src={post.feature_image}
        alt='Feature image'
      />
      <div className={styles.cardBody}>
        <h4 className={styles.cardTitle}>{post.title}</h4>
        {/* <small>{post.excerpt}</small> */}
      </div>
    </div>
  )
}

export default PostItem
