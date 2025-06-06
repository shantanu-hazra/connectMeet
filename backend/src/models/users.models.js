import { Schema,mongoose } from "mongoose";



const usersSchema= new Schema({
  name:{type:String, required:true},
  username:{type:String, required:true, unique:true},
  password:{type:String, required:true},
  token:{type:String},
})

const User= mongoose.model("User",usersSchema);

export {User};