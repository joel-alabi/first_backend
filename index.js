const express = require('express');

const handleAllRequest = (requestObject,responseObject) =>{
    console.log('hello i recicieved a request')
     const url = requestObject.url;    
     responseObject.write('<h1>server shut down</h1>')
    
     responseObject.end();
}

const handleHomeRequest =(req,res)=>{
    res.send("<h1>Welcome to homepage</h1>")
}
const handleLoginRequest =(req,res)=>{
    res.send("<h1>this is login post</h1><h3>started nodejs with express very fun</h3><button> submit</button>")
}
const handleSignupRequest =(req,res)=>{
    res.send("<h1>this is signup page</h1>")
}
const handleProfileRequest =(req,res)=>{
    res.send("<h1>this is profile page</h1>")
}
 

const server = express();
server.put('/profile',handleProfileRequest)
server.get('/login',handleLoginRequest)
server.post('/login',handleLoginRequest)
server.use('/signup',handleSignupRequest)
server.use("/",handleHomeRequest);


server.listen(3000,'127.0.0.1',()=>
console.log('server is running')
)