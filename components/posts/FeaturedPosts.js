import React from 'react'
import Link from 'next/link'
import styles from './FeaturedPosts.module.css'
import FeaturedPostItem from './FeaturedPostItem'

const FeaturedPosts = ({ featured }) => {
  return (
    <section className={styles.featuredPosts}>
      {featured?.map((feat) => (
        <div key={feat.id}>
          <Link href={`/posts/${feat.slug}`}>
            <a>
              <FeaturedPostItem featured={feat} />
            </a>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default FeaturedPosts
