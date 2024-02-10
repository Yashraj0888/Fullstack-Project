import mongoose from "mongoose";
import { DB_name } from "../constants.js";

const helllo=3
const connectDB=async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
        console.log(`Mongoose got connected DB host `);
    }catch(error){
        console.log("error is ",error);
        process.exit(1);

    }
}
 export default connectDB