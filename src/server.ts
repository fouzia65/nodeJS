import { createServer } from "http";

const server = createServer((req, res) =>{
    console.log( "Request: ",req);
})

server.listen(5000 , ()=>{
    console.log("server is running port 5000")
})