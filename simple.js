var http=require('http');
http.createServer(function(req,res)
{
	res.writeHead(200,{"contains":"text/html"})
	res.write("hello world");
	res.end();
}).listen(8000);