import express from "express";
import 'dotenv/config'
import { connectToMongoDB } from "./connections.js";

console.log(process.env.PORT);
const x=connectToMongoDB().then((res)=>{
    let y = async ()=> {
        let y  =await res.connection.listCollections();
        console.log(y);

    
}

y()
}
);

express().listen(process.env.PORT,()=>{
    console.log(`server started at ${process.env.PORT}`);
})
