import mongoose,{Schema} from "mongoose"
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim: true,
        index:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,
        required:true
    },
    coverimage:{
        type:String,

    },
    watchHistory:{
        type:Schema.Types.ObjectId,
        ref:"Video"
    },
    password: {
        type:String,
        required:[true,'Password is required']
    },
    refreshToken: {
        type:String
    }
});
export const User=mongoose.model("User",userSchema)