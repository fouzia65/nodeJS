import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";
import type { Iproducts } from "../types/products";
import { bodyParser } from "../utils/parseBody";

const productController = async(req: IncomingMessage , res: ServerResponse)=>{
        const products = productService()
        const url = req.url
        const method = req.method
          //  console.log("url:",url) // /product
        const urlParam = url?.split('/')
        console.log(urlParam) // ['', 'product' , '1']

        //ekhane main kahini ta holo url e jodi product thake and tar pashe jodi 1,2,3... etc dewa thake tahole oita number e show korao otherwise null show korao
        const id = urlParam && urlParam[1] === "product" ? Number(urlParam[2]) : null
        console.log(id) // 1

        // get all data 
      if(url === "/product" && method === "GET"){
         res.writeHead(200, {"Content-type": "application/json"})
        res.end(JSON.stringify({message:"Product recived successfully",
                data : products
        }));
      }
      //get single data 
      else if(method === "GET" && id != null){
        const product = products.find((p:Iproducts)=> p.id === id)
        console.log(product)
         res.writeHead(200, {"Content-type": "application/json"})
        res.end(JSON.stringify({message:"Product recived successfully",
                data : product
        }));
      }
      else if(method === "POST" && url === "/product"){
        // "abcd" => "a" , "b" , "c" , "d" => "abcd"
        const body = await bodyParser(req)
        console.log(body)
         res.writeHead(201, {"Content-type": "application/json"})
        res.end(JSON.stringify({message:"Product recived successfully",
                // data : product
        }));
      }
}

export default productController;