import server from './server.mjs'

const PORT = 3000
server.listen(PORT, () => {
  console.log(`[User API Server] listening at http://localhost:${PORT}`)
})