import express from "express";
import 'dotenv/config'
import { connectToMongoDB } from "./connections.js";

console.log(process.env.PORT);
connectToMongoDB().then(()=>{
    console.log(`connected to ${process.env.DBURL}`);
})
.catch((err)=>{
    console.log(`Error is ${err}`);

})





express().listen(process.env.DBURL,()=>{
    console.log(`server started at ${process.env.PORT}`);
})
