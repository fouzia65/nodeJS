import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { json } from "stream/consumers";
import routeHandler from "./route/route";

const server : Server = createServer((req:IncomingMessage, res: ServerResponse) =>{
  routeHandler(req, res)
})

server.listen(5000 , ()=>{
    console.log("server is running port 5000")
})