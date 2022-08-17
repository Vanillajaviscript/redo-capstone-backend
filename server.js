import 'dotenv/config';
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/connection.js";
const PORT = process.env.PORT || 3001;
const app = express();
import serverMiddleware from './middleware/server.js';
dotenv.config();
import logger from "morgan"

////////////
//Middleware
////////////
const middleware = async () => {
  try {
    serverMiddleware();
  } catch(error) {
    console.log(`Catch error: ${error}`)
  }
};
middleware();

//Root Directory
app.get("/", (req, res) => {
  res.send("Dog rescue adoptions")
});

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