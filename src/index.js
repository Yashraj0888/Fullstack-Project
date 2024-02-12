import dotenv from "dotenv"
import { app } from "./app.js";
// import mongoose from "mongoose";
// import { DB_name } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running at ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Connection failed",err);
})





































/*
import  express from "express";

const app=(express);

;(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
        app.on("error",(error)=>{
            console.log("error",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is running on port ${process.env.PORT}`);
        })
    }catch(error){
        console.log("error ",error);
    }
})()

*/