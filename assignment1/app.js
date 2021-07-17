const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<body>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body>');
        res.write('<h1>My 1st node js page</h1>');
        res.write('<form action="create-user" method="post"><label>Enter User name : <input type="text" name="username"></label><input type="submit"></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    
    if(url === '/users'){
        res.setHeader('Content-Type','text/html');
        res.write('<body>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body>');
        res.write('<ul><li>Sumit Upadhyay</li><li>Jakasur</li><li>Prem Chopra</li></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    
    if (url === '/create-user') {
       
        const txt = [];
        req.on('data',chunk => {
            txt.push(chunk);
        });
        req.on('end', () => {
          const parsedBody = Buffer.concat(txt).toString();
          console.log(parsedBody.split('=')[1]); 
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      }
    res.write('<h1>404 Page not found 999</h1>');
    return res.end();
});

server.listen(12345);