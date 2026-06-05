
import connectdb from "./database/db.js";
import dotenv from "dotenv"
dotenv.config({
    path: './env'
})


connectdb()
.then(()=>{
   app.listen(process.env.PORT || 8000,()=>{
      console.log(`Server is running at port:${process.env.PORT}`)
   })
})
.catch((err)=>{
   console.log("MONGO db connection failed !!", err)
})


























// function dbconnect(){}
// upar wala function use kar sakte hai db connect karne k liye par voh ek proffesional approach nhi hai
// WE will use iife-immediately invoked functional expression
/*
;(async ()=>{
  try{
     mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     app.on("error",(error)=>{
        console.log("ERROR",error);
        throw error
     })
     app.listen(process.env.PORT, () =>{
        console.log(`App is listening on port ${process.env.PORT}`)
     })
  } catch {
         console.log("ERROR")
         throw error
  }
})()
  */
