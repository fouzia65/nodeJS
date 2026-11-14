import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";

const productController = (req: IncomingMessage , res: ServerResponse)=>{
        const products = [
                {
                        "id": 1,
                        "Product_name" : "Product-1",
                        "Price" : 200
                },
                {
                      "id": 2,
                        "Product_name" : "Product-2",
                        "Price" : 300  
                }
        ]
        productService()
 res.writeHead(200, {"Content-type": "application/json"})
        res.end(JSON.stringify({message:"Product recived successfully",
                data : products
        }));
}

export default productController;