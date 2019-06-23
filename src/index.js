import http from 'http'

import app from './app'

const port = process.env.PORT || '8080'
app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  switch (error.code) {
    case 'EACCES':
      console.error('Server does not have correct privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(`Port ${port} is already in use.`)
      process.exit(1)
      break
    default:
      throw error
  }
}

function onListening () {
  console.log(`Listening on port ${port}`)
}