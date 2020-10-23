import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '1a47c05bfac1f328da74dccbff',
  version: 'v3',
})

export async function getPosts() {
  return await api.posts
    .browse({
      include: 'tags,authors',
      limit: 'all',
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read(
      {
        slug: postSlug,
      },
      { include: 'tags,authors' }
    )
    .catch((err) => {
      console.error(err)
    })
}
