import mongoose,{Schema} from "mongoose";
import mongooseaggregatepaginate from "mongoose-aggregate-paginate"
const videoSchema =new Schema(
    {
        videoFile:{
            type:String,
            required:true
        },
        thumbnail: {
            type:String,
            required:true
        },
        title: {
            type:String,
            required:true
        },
        description:{
             type:String,
            required:true
        },
        duration:{
            type:Number,
            required:true
        },
        isPublished:{
            type:Boolean,
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            "ref":User
        }
    }
)
videoSchema.plugin(mongooseAggregatePaginate)
export const video=mongoose.model("video","videoSchema")