import mongoose from "mongoose";
const complaintSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
      trackingId: {
      type: String,
      unique: true,
      required: true,
    },

   name: {
    type: String,
    required: true,
  },
   category: {
    type: String,
    required: true,
  },
  
  
   description: {
    type: String,
    required: true,
  },
   address: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
     match: [/^[0-9]{6}$/, "Please enter a valid 6-digit PIN code"]
  },

  status: {
    type: String,
    enum: ["pending", "in_progress", "resolved"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Complaint = mongoose.model("Complaint", complaintSchema);
