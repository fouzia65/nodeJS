import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { json } from "stream/consumers";
import routeHandler from "./route/route";
import config from "./config";

const server : Server = createServer((req:IncomingMessage, res: ServerResponse) =>{
  routeHandler(req, res)
})

server.listen(config.port , ()=>{
    console.log("server is running port 5000")
})