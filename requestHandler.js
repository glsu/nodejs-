/*
* @Author: Promise
* @Date:   2018-03-07 17:08:14
* @Last Modified by:   Promise
* @Last Modified time: 2018-03-08 10:40:58
*/
// let exec = require('child_process').exec;
let querystring = require('querystring');
let fs = require('fs');
let formidable = require('formidable');
let start = function (res) {
	let body = `
	<html>
		<meta http-equiv='Content-Type' content='text/html' charset='UTF-8' />
		<head></head>
			<body>
				<form action='/upload' enctype='multipart/form-data' method='post'>
					<input type='file' name='upload' />
					<input type="submit" value="Upload file" />
				</form>
			</body>
	</html>
	`
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(body);
	res.end();
};
let upload = function (res, req) {
	let form = new formidable.IncomingForm();
	form.parse(req, function (err, fileds, files) {
		fs.renameSync(files.upload.path, './temp/test.jpg');
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('received image: <br />');
		res.write('<img src="/show" />');
		res.end();
	});
};
let show = function (res) {
 fs.readFile('./temp/test.jpg',  'binary', function (err, file) {
 	if(err) {
 		res.writeHead(500, {'Content-Type': 'text/plain'});
 		res.write(err + '\n');
 		res.end();
 	}else {
 		res.writeHead(200, {'Content-Type': 'image/jpg'});
 		res.write(file, 'binary');
 		res.end();
 	}
 });
};
exports.start = start;
exports.upload = upload;
exports.show = show;