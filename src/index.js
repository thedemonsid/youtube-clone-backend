import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Server is running at port ${process.env.PORT}`)
    });
  })
  .catch((error) => {
    console.log("MONGODB connection error : ", error);
  });

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
