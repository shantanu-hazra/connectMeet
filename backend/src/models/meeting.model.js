import mongoose from "mongoose";


const meetingSchema=new mongoose.Schema({
  user_id:{type:String},
  date:{type:Date,default:Date.now,required:true},
  meeting_id:{ type: String, required:true}
})

const Meeting=mongoose.model("Meeting",meetingSchema);

export {Meeting};