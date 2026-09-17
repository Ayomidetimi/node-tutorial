// HTTP MODULES

const http = require('http');

const server = http.createServer((req,res)=> {
  if(req.url === '/') {
    res.end('this is the first node')
  } else if(req.url === '/about') {
    res.end('this is the second node')
  } else res.end(`
    <h1>this is bad</h1>
    <a href="/">go back</a>
  `)
})

server.listen(5000)