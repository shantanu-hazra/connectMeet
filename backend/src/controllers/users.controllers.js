import { User } from "../models/users.models.js";
import { Meeting } from "../models/meeting.model.js";

import httpStatus from "http-status";
import bcrypt, {hash} from "bcrypt";
import crypto from "crypto";

const login= async (req,res)=>{
  console.log(req.body)
  const {username, password}=req.body;

  if(!username || !password){
    return res.status(400).json({message:"Please provide"})
  }

  try{
    const user =await User.findOne({username});
    if(!user){
      return res.status(400).json({message:"No user found"})
    }
    if(bcrypt.compare(password,user.password)){
      let token = crypto.randomBytes(20).toString("hex");

      user.token=token;
      await user.save();
      return res.status(httpStatus.OK).json({token:token})
    }
    else{
      return res.status(httpStatus.UNAUTHORIZED).json({message:"Invalid values"})
    }

  }catch(e){
    return res.json({message:`Something went wrong ${e}`});
  }

}


const register = async (req, res) => {
  console.log(req.body);

  const { name, username, password } = req.body;

  // Input validation
  if (!name || !username || !password) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: "All fields (name, username, password) are required.",
    });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res
        .status(httpStatus.CONFLICT)
        .json({ message: "Username already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      username,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    return res
      .status(httpStatus.CREATED)
      .json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during user registration:", error); // Log error for debugging
    return res.error(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: "Something went wrong during registration.",
    });
  }
};


const getUserHistory = async ()=>{
  const {token} =req.query;

  try{
    const user = await User.findOne({token:token});
    const meetings = await Meeting.find({user_id:user.username})
  }catch(e){
    res.json({message: `Something went Wrong`})
  }
}


const AddToHistory = async (req,res)=>{
  const {token , meeting_code} = req.body;

  try{
    const user = await User.findOne({token:token});

    const newMeeting = new Meeting({
      user_id:user.username,
      meetingCode:meeting_code
    })

    await newMeeting.save();

    res.status(httpStatus.CREATED).json({message:"Added to History"})
  }catch(e){
    res.json({message: `Something Went Wrong: ${e}`})
  }
}

export {login,register,getUserHistory,AddToHistory}; 