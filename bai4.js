 // requestEvent: http, sử dụng on của request. 
 const http = require('http');
 const server = http.createServer()
 server.on('request', (req,res) => {
    res.end('hello World')
 })
 server.listen(8080) //  chay teminal r moi len http://localhost:8080  để xem kết quả