const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Home Page')
})

const port = 3006

server.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
})