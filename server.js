/*
* @Author: Promise
* @Date:   2018-03-07 15:26:27
* @Last Modified by:   Promise
* @Last Modified time: 2018-03-08 10:30:10
*/
let http = require('http');
let url = require('url');
let start = function (route, handle) {
	http.createServer((req, res) => {
		let pathname = url.parse(req.url).pathname;
		route(handle, pathname, res, req);
	}).listen(8888);
};
exports.start = start;
