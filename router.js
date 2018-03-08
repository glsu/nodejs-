/*
* @Author: Promise
* @Date:   2018-03-07 16:56:37
* @Last Modified by:   Promise
* @Last Modified time: 2018-03-08 10:31:45
*/
let route = function (handle, pathname, res, req) {
	if(typeof handle[pathname] === 'function') {
		handle[pathname](res, req);
	}else {
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.write('404 not found');
		res.end();
	}
};
exports.route = route;