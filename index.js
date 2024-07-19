import express, { json } from "express";
import 'dotenv/config'
import { connectToMongoDB } from "./connections.js";
import { Router } from "./routes/url.js";


let app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

const x=connectToMongoDB().then((res)=>{
    console.log("connection successful");
}
)
.catch((err)=>{
    console.log("connection failed ERR - ",err);

})


app.use('/url',Router);

app.listen(process.env.PORT,()=>{
    console.log(`server started at ${process.env.PORT}`);
})
