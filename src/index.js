import 'dotenv/config'
import  connectDB  from "./db/index.js";

connectDB();

//import mongoose from "mongoose";
//import { DB_NAME } from "./constants.js";

// (async () => {
//   try {
//     mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//   } catch (error) {
//     console.log("Error", error);
//     throw error;
//   }
// })();
