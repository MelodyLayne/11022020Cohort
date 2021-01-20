const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const server = http.createServer(async (req, res) => {
  console.log('Request received...')
  let content;

  const ext = path.extname(req.url);
  if (ext === '.jpeg') {
    content = await fs.readFile('./assets/images/node-http.jpeg');
    res.setHeader('Content-Type', 'image/jpeg');
  } else {
    res.setHeader('Content-Type', 'text/html');
    content = await fs.readFile('./views/index.html');
  }
  res.statusCode = 200;
  res.end(content); // write and end the response
  // res.write(content); // write to the response body
  // res.end(); // end the response
});

const port = 8081;

server.listen(port, () => {
  console.log('Server is running on port', port);
});