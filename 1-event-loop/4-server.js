const http = require('http');

const server = http.createServer((req, resp) => {
  console.log('request event')
    resp.end('hello world')
}) 

server.listen(5000, ()=> {
  console.log('Server listening on port : 5000....')
})