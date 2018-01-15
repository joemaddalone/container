const http = require("http");
const fs = require("fs");
fs.readFile('./dist/projectc.min.js', function (err, js) {
	if (err) throw err;
	http.createServer(function (req, res) {
		const origin = (req.headers.origin || '*');
		res.writeHeader(200, {
			'Content-Type': 'text/javascript',
			'access-control-allow-origin': origin
		});
		res.write(js);
		res.end();
	}).listen(3002);
});