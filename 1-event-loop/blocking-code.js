const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    return res.end('Home')
  }
  if(req.url === '/about') {

    // BLOCING CODE

    for(i=0; i<1000; i++) {
      for(j=0; j<1000; j++) {
        console.log(`${j} ${i}`)
      }
    }
    return res.end('about')
  }
  return res.end('error')
});

server.listen(5000, ()=> {
  console.log('server listening on port 5000...')
})