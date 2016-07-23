var fs = require('fs');

var stream = new fs.ReadStream("nono.html");

stream.on('readable', function () {
  var data = stream.read();
  console.log(data);
});

stream.on('end', function () {
  console.log("THE END");
});

stream.on('error', function (err) {
  if (err.code == 'ENOENT') {
    console.log("Файл не найден");
  } else {
    console.error(err);
  }
});