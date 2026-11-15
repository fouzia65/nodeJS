import path from "node:path";
import fs from "fs"
import type { Iproducts } from "../types/products";

const filePath = path.join(process.cwd(), '/src/database/db.json')

export const productService =()=>{
    // console.log(filePath);
    const result = fs.readFileSync(filePath, "utf-8")
    // console.log(result)
    return JSON.parse(result)
}

export const createProduct = (payload : Iproducts) =>{
     fs.writeFileSync(filePath, JSON.stringify(payload))
    
}