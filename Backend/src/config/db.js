import mongoose from "mongoose"
import dotenv from 'dotenv'
const connectdb=async()=>{


try {
    await mongoose.connect(
      process.env.mongourl,
      {
        dbName: "complaint_resolver_system"
      }
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

export default connectdb;