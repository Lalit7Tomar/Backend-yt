import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


    // Configuration
    const uploadOncloudinary= async (localfilepath)=>{
       try{
          if(!localfilepath){
             return null;
          }

          //upload the file on cloudinary

      const upload= await cloudinary.uploader
       .upload(
           localfilepath, {
               public_id: 'shoes',
           }
       )
       console.log("Upload status on cloudinary is ",upload)
      }catch(error){
        // see before uploading files on cloudinary,we know it is present in 0ur server,so if uploading files on cloudinary is failed,we haave to remove local files from the server
        fs.unlink(localfilepath)
      }}
       