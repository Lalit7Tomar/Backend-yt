import mongoose,{Schema} from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
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
// mongoose aggregate paginate,jwt and bcrypt
userSchema.pre("save",async function (next) {
    if(!this.isModified("password")) return next();
    this.password= bcrypt.hash(this.password, 10)
    next()
})
userSchema.methods.isPasswordCorrect =async function (password){
    bcrypt.compare()
}
export const User=mongoose.model("User",userSchema)