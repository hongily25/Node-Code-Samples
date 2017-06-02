const http = require('http');
const fs = require('fs');
const filePath = 'red.html';

http.createServer((req, res) => {
  res.writeHead(200);

  fs.readFile(filePath, (err, data) => {
    const myData = data.toString();
    res.write(data);
  });

}).listen(3000);
