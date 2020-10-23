import React from 'react'
import styles from './FeaturedPostItem.module.css'

const FeaturedPostItem = ({ featured }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.imgTop}
        src={featured.feature_image}
        alt='Feature image'
      />
      <div className={styles.cardBody}>
        <h4 className={styles.cardTitle}>{featured.title}</h4>
      </div>
    </div>
  )
}

export default FeaturedPostItem
