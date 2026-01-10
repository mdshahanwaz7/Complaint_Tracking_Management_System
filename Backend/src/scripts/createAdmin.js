// src/scripts/createAdmin.js
import { Formdetails} from "../models/User.models.js";
import connectdb from "../config/db.js"


const createAdmin = async () => {
  await connectdb();

  const adminExists = await Formdetails.findOne({ role: "admin" });

  if (adminExists) {
    console.log("Admin already exists");
    process.exit(0);
  }

  await Formdetails.create({
    name: "Super Admin",
    email: "admin@gmail.com",
    password: "admin123",   // later hash
    role: "admin"
  });

  console.log("Admin created successfully");
  process.exit(0);
};

createAdmin();