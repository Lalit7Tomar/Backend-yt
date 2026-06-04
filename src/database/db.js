import mongoose from "mongoose";
import { DB_NAME} from "../constants.js";
// database bahut door rakha hota hai toh connect kare mai time lag sakta ahi isliye async function
export const connectdb= async ()=>{
    try{
      const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n Mongodb connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch(error){
        console.log("MONGO_DB connection error",error);
        process.exit(1)
    }
}
export default connectdb