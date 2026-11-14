import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";

const productController = (req: IncomingMessage , res: ServerResponse)=>{
        const products = productService()
 res.writeHead(200, {"Content-type": "application/json"})
        res.end(JSON.stringify({message:"Product recived successfully",
                data : products
        }));
}

export default productController;