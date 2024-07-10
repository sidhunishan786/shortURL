import mongoose from "mongoose";
import "dotenv/config";
export async function connectToMongoDB(){
    
    return await mongoose.connect(process.env.DBURL);;
}
