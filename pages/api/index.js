import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '1a47c05bfac1f328da74dccbff',
  version: 'v3',
})

export default api
