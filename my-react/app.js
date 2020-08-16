const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My Assignment</title></head>');
        res.write('<body><h1>Hello world, Good evening!!</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username" /><button type="submit">Create User</button></form></body>');
        return res.end();
    }

    if(url === '/users'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My Assignment</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        return res.end();
    }

    if(url === '/create-user' && method==="POST"){
        const parseBody = [];
        req.on('data', (chunk) => {
            parseBody.push(chunk);
        });
        return req.on('end', () => {
            const body = Buffer.concat(parseBody).toString();
            console.log(body.split('=')[1]);
        });  
        req.statusCode = 302;
        req.setHeader('Location', '/');
        res.end();
    }
});

server.listen(3000);