import type { IncomingMessage, ServerResponse } from "http";
import productController from "../controller/product.controller";

const routeHandler = ( req: IncomingMessage, res: ServerResponse) =>{
  // console.log( "Request: ",req);
    // console.log("Respose", res);
    // console.log(req.url);
    // console.log(req.method);
    const url = req.url
    const method = req.method
   
    if(req.url === "/" && req.method === "GET"){
        // console.log("this is root route");
        res.writeHead(200, {"Content-type": "application/json"})
        res.end(JSON.stringify({message:"This is root route"}));
    }
    else if(req.url?.startsWith("/product")){
      
     productController(req,res);
    }
    else{
        res.writeHead(404, {"Content-type": "application/json"})
        res.end(JSON.stringify({message:"This root route is undefined"}));
    }
}

export default routeHandler;