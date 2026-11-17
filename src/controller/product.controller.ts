import type { IncomingMessage, ServerResponse } from "http";
import { createProduct, productService } from "../service/product.service";
import type { Iproducts } from "../types/products";
import { bodyParser } from "../utils/parseBody";
import { sendResponse } from "../utils/sendResponse";

const productController = async(req: IncomingMessage , res: ServerResponse)=>{
        const products = productService()
        const url = req.url
        const method = req.method
          //  console.log("url:",url) // /product
        const urlParam = url?.split('/')
        // console.log(urlParam) // ['', 'product' , '1']

        //ekhane main kahini ta holo url e jodi product thake and tar pashe jodi 1,2,3... etc dewa thake tahole oita number e show korao otherwise null show korao
        const id = urlParam && urlParam[1] === "product" ? Number(urlParam[2]) : null
        // console.log(id) // 1

        

        // get all data 
      if(url === "/product" && method === "GET"){
       
        try {
           const products = productService()
          sendResponse(res, true, 200, "Product recived successfully", products)
        } catch (error) {
          sendResponse(res, false, 500, "Internal server error")
        }
      }



      //get single data 
      else if(method === "GET" && id != null){
        const product = products.find((p:Iproducts)=> p.id === id)
        console.log(product)
        try {
          if(!product){
            sendResponse(res, false, 404, "Product not found")
        }
          sendResponse(res, true, 200, "Product recieved successfully", product)
        } catch (error) {
          sendResponse(res, false, 500, "Internal server error")
        }
      }



      else if(method === "POST" && url === "/product"){
        // "abcd" => "a" , "b" , "c" , "d" => "abcd"
        const body = await bodyParser(req)
        // console.log(body)
        const newProduct = {
          id: Date.now(),
          ...body
        }
        // console.log(newProduct)
        const products = productService() //[{}, {}]
        products.push(newProduct) // [{}, {} , {new}]
        createProduct(products)
        console.log(products)

         res.writeHead(201, {"Content-type": "application/json"})
        res.end(JSON.stringify({message:"Product recived successfully",
                data : newProduct
        }));
      }




      else if(method === "PUT" && id !== null){
        // "abcd" => "a" , "b" , "c" , "d" => "abcd"
        const body = await bodyParser(req)
        const products = productService() //[{}, {}]
        const index = products.findIndex((p:Iproducts)=>p.id == id)
        // console.log(index)
        if(index <0){
           res.writeHead(404, {"Content-type": "application/json"})
        res.end(JSON.stringify({message:"Product not found",
                
        }));
        }

        // console.log(products[index])
        products[index] = {id : products[index], ...body}
        createProduct(products)
        res.writeHead(200, {"Content-type": "application/json"})
        res.end(JSON.stringify({message:"Product updated successfully",
                data : products[index]
        }));
      }



      else if(method === "DELETE" && id !== null){
        const products = productService() //[{}, {}]
        const index = products.findIndex((p:Iproducts)=>p.id == id)
        // console.log(index)
        if(index <0){
           res.writeHead(404, {"Content-type": "application/json"})
        res.end(JSON.stringify({message:"Product not found",
                
        }));
        }
        // const arr = ["a", "b", "c"];
        // arr.slice(2,1)
        // console.log(arr)

        products.slice(index,1)
        createProduct(products)

        res.writeHead(200, {"Content-type": "application/json"})
        res.end(JSON.stringify({message:"Product updated successfully",
                // data : products[index]
        }));
      }
}

export default productController;