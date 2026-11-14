import path from "node:path";

const filePath = path.join(process.cwd(), '/src/database/db.ts')
export const productService =()=>{
    console.log(filePath);
}