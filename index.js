/*
* @Author: Promise
* @Date:   2018-03-07 16:49:18
* @Last Modified by:   Promise
* @Last Modified time: 2018-03-08 10:17:42
*/
let server = require('./server');
let router = require('./router');
let requestHandler = require('./requestHandler');
let handle = {
	'/': requestHandler.start,
	'/start': requestHandler.start,
	'/upload': requestHandler.upload,
	'/show' : requestHandler.show
};

server.start(router.route, handle);