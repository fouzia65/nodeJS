import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { json } from "stream/consumers";

const server : Server = createServer((req:IncomingMessage, res: ServerResponse) =>{
    // console.log( "Request: ",req);
    // console.log("Respose", res);
    // console.log(req.url);
    // console.log(req.method);
    if(req.url === "/" && req.method === "GET"){
        // console.log("this is root route");
        res.writeHead(200, {"Content-type": "application/json"})
        res.end(JSON.stringify({message:"This is root route"}));
    }
    else if(req.url?.startsWith("/product")){
      res.writeHead(200, {"Content-type": "application/json"})
        res.end(JSON.stringify({message:"This is product route"}));
    }
    else{
        res.writeHead(404, {"Content-type": "application/json"})
        res.end(JSON.stringify({message:"This root route is undefined"}));
    }
})

server.listen(5000 , ()=>{
    console.log("server is running port 5000")
})