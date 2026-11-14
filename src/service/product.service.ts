import path from "node:path";
import fs from "fs"

const filePath = path.join(process.cwd(), '/src/database/db.ts')
export const productService =()=>{
    // console.log(filePath);
    const result = fs.readFileSync(filePath, "utf-8")
    // console.log(result)
    return JSON.parse(result)
}