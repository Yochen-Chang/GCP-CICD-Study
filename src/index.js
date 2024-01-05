const { createServer } = require('http')
const { parse } = require('url')

/**
 * @param {string} q
 */
function parseQuery (q) {
  return q.split('&').reduce((obj, token) => {
    const [ k, v ] = token.split('=')
    obj[k] = v
    return obj
  }, {})
}

createServer((req, res) => {
  const { query } = parse(req.url)
  const queryObj = parseQuery(query || '')

  const you = queryObj.me || 'World'

  res.writeHead(200)
  res.end(`Hello ${you}!\n`)
})
  .listen(80, () => {
    console.log('Server is listening...')
  })
