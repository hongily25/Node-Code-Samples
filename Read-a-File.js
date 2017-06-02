var fs = require('fs');


fs.readFile('red.html', (err, data) => {
  if (err) return console.error(err);
  var text = data.toString();
  console.log(text);
});

console.log("Processed the console message and then this: ");
