const http = require('http');

const handleAllRequest = (requestObject,responseObject) =>{
    console.log('hello i recicieved a request')
     const url = requestObject.url;
     responseObject.setHeader('content-type','text/html');
    if (url === '/'){
        responseObject.write('<h1>Welcome to homepage</h1>')
    }else if(url ==='/login'){
        responseObject.write('<h1>this is login page</h1>')
    }else if(url ==='/signup'){
        responseObject.write('<h1>this is signup page</h1>')
    }else if(url ==='/profile'){
        responseObject.write('<h1>this is profile page</h1>')
    }
    else{
        responseObject.write('<h1>server shut down</h1>')
    }
   responseObject.end();
}


const server = http.createServer(handleAllRequest);

server.listen(3000,'127.0.0.1',()=>
console.log('server is running')
)