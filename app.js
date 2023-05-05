const http = require('http');

http.createServer( function (req, res) {
	res.write("On the way to being a fullsnack engineer...almost there Derrick");
	res.end();
}).listen(3000);

console.log("server started on port 3000");
