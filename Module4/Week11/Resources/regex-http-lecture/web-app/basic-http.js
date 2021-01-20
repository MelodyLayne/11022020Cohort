const http = require('http');

const server = http.createServer(async (req, res) => {
  console.log('Request received...');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello World!</h1>');
  res.write('<dl>');

  for (let [key, value] of Object.entries(req.headers)) {

  // for (let key of Object.keys(req.headers)) {
  //   const value = req.headers[key];  

    res.write(`<dt>${key}</dt>`);
    res.write(`<dd>${value}</dd>`);
  }

  res.write('</dl>');

  res.end();
});

const port = 8081;

server.listen(port, () => {
  console.log('Server is running on port', port);
});