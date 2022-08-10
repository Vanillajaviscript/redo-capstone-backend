import 'dotenv/config';
import express from "express";
import cors from "cors";
import logger from "morgan"
import userRouter from "./routes/userRouter.js";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/connection.js";
const PORT = process.env.PORT || 3001;
const app = express();


////////////
//Middleware
////////////
app.use(logger('dev'));
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
//endpoint ex. /users/signup
app.use("/users", userRouter); 



////////////////////////
// Server Listener
////////////////////////
const start = async () => {
  try {
    connectDB();
    app.listen(PORT, () => {
      console.log(`Server is live on port: ${PORT}`)
    })
  } catch(error) {
    console.log(`Catch error: ${error}`)
  }
};
start();