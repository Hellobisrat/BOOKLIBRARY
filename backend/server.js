import express from 'express';

import { connectToDB } from './config/db.js';
import User from './models/user.model.js'
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";
import cors from 'cors'
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const PORT = process.env.PORT;
console.log('port is :',PORT)

app.use(express.json());
// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true
// }
// ))

app.get('/',(req,res)=>{
  res.send("Updated backend server is running!")
})
// app.post('/api/signup', async(req,res)=>{
//   const {username,email,password}= req.body;
//   try {
//     if(!username || !email || !password){
//       throw new Error("All fields are required.")
//     }
//     const emailExists = await User.findOne({email})
//     if(emailExists){
//       return res.status(400).json({message: "User already exists."})
//     }
//     const usernameExists = await User.findOne({username});
//     if(usernameExists){
//       return res
//       .status(400)
//       .json({message: "Username is taken, try another name."})
//     }
//     const hashedPassword = await bcryptjs.hash(password,10);
//     const userDoc = await User.create({
//       username,
//       email,
//       password:hashedPassword
//     });
//     if (userDoc){
//        const token = jwt.sign({id:userDoc._id},process.env.JWT_SECRET,{expiresIn:"7d"})
//       res.cookie('token',token,{
//       httpOnly:true,
//       secure: process.env.NODE_ENV==='production',
//       sameSite: 'strict',
//       maxAge: 7*24*60*60*1000})
//     }
//     return res.status(200).json({user:userDoc,message:"user created successfully"})
   
//   } catch (error) {
//     res.status(400).json({message:error.message})
//   }
// })



app.listen(PORT, '0.0.0.0', () => {
  console.log(`server is running on http://localhost:${PORT}`);
});