import express  from "express"
import dotenv from 'dotenv'
dotenv.config({path:'.env'})
import {config} from "dotenv"
import jwt from 'jsonwebtoken'
import authMiddleware from "./src/middlewares/authmiddleware.js";
import { adminMiddleware } from "./src/middlewares/adminMiddleware.js";
import mongoose from "mongoose";
import connectdb from "./src/config/db.js"
import cors from "cors"

import { Formdetails } from "./src/models/User.models.js";
import { Complaint } from "./src/models/Complaint.model.js";



// import authRoutes from "./src/routes/authRoutes.js"
const app=express()


app.use(cors());
app.use(express.json());
connectdb()



// const port=1000
app.post("/api/user/register",async(req,res)=>{
  const{name,email,password}=req.body
  let detail= await Formdetails.create({name,email,password})
  console.log(req.body)

  
  res.json({message:"user created succesfully "},detail)
  // console.log("hlllllll")
  // console.log(req.body)
  

})
app.post("/api/user/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Formdetails.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }


    const token= jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:'7d'})
    console.log("admin",token)

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }


    res.status(200).json({
      message: "Login successful",
      role: user.role,
       name: user.name,
    email: user.email,
      userId: user._id, token,
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});



// import mongoose from "mongoose";
app.get("/api/user/welcome", async (req, res) => {
  const { id } = req.query
  const name =await Formdetails.findOne(id).sort({ _id: -1 }).select("name email")
  if(!name)
    return res.json({message:"no contact "})
  res.json({message:"finded",name})

  
});

const generateTrackingId = () => {
  return "CMP-" + Date.now().toString().slice(-6);
};
console.log(generateTrackingId)


app.post("/api/complaint",authMiddleware,async(req,res)=>{

  const{name,category,address,description,district,pincode}=req.body
  console.log(req.user.id)
   console.log("USER:", req.user);
    console.log("BODY:", req.body);
  let detail= await Complaint.create({
    userId:new mongoose.Types.ObjectId(req.user.id),
    trackingId: generateTrackingId(),
    name,
    category,
    address,
    description,
    district,
    pincode,
  })
  // console.log(req.user.id)
    if (!detail) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  console.log(req.body)

  
  res.json({message:"Complaint succesfully sent"},detail,detail.trackingId)
})
// userstatus
app.get('/api/complaint/summary',authMiddleware, async(req,res)=>{
  const userId=req.user.id
  // const role=req.user.role
  // let filter={}
    
  
  // res.json({total:userId})
  // console.log('filter',filter)
  try {
   const total = await Complaint.countDocuments({ userId });
   console.log('user total',total)
    const inProgress = await Complaint.countDocuments({userId, status: "in_progress" });
   
    const resolved = await Complaint.countDocuments({userId, status: "resolved" });

    res.json({
      total,
      
  inProgress,
      resolved,
    });
  } catch(e){
    res.json({message:"server Error"})
  }
})

app.get("/api/admin/complaint/status", authMiddleware,adminMiddleware, async (req, res) => {
  try {
  const total = await Complaint.countDocuments();
  console.log('admintotal',total)
    const inProgress = await Complaint.countDocuments({
      
      status: "in_progress",
    });
    const resolved = await Complaint.countDocuments({
      
      status: "resolved",
    });

    res.json({
      total,
      inProgress,
      resolved,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

//adminstatu


app.get(
  "/api/admin/complaint/summary", authMiddleware,adminMiddleware,
  
 
  async (req, res) => {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.json(complaints);
    // console.log(complaints)
  }
);


app.put("/api/admin/complaint/:id/status",authMiddleware,adminMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    console.log("ID:", id);
    console.log("STATUS:", status);

    const complaint = await Complaint.findByIdAndUpdate(
      id,
      { status },
      { new: true,runValidators: true } // return updated document
    );
    console.log(complaint)

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });

    }

    res.json({
      message: "Status updated successfully",
      complaint,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});



// app.get("/api/user/", async (req, res) => {
// const users = await Formdetails.find();
// console.log(users);

 

//   res.json(user);
// });

const port=process.env.PORT
app.listen(port,()=>{
    console.log('server is runni g ion 2000')
    // console.log(process.env.JWT_SECRET);

    // app.json({name:"md"})
})
