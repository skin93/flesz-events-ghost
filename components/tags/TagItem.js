import React from 'react'
import styles from './TagItem.module.css'

const TagItem = ({ tag }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.imgTop}
        src={tag.feature_image}
        alt='Feature image'
      />
      <div className={styles.cardBody}>
        <h4 className={styles.cardTitle}>{tag.title}</h4>
      </div>
    </div>
  )
}

export default TagItem
