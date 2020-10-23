import React from 'react'
import styles from './FeaturedPostItem.module.css'

const FeaturedPostItem = ({ featured }) => {
  return (
    <div className={styles.featCard}>
      <div
        className={styles.featImg}
        style={{
          backgroundImage: `url(${featured.feature_image})`,
        }}
      >
        <h3 className={styles.featTitle}>{featured.title}</h3>
        <div className={styles.featImgOverlay} />
      </div>
    </div>
  )
}

export default FeaturedPostItem
