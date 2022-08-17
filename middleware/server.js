import logger from "morgan";
import cors from "cors";
import express from "express";
import dogRouter from "../routes/dogRouter.js";
import userRouter from "../routes/userRouter.js";
const middleware = express();

////////////
//Middleware
////////////
const serverMiddleware = () => {
  middleware.use(logger('dev'));
  middleware.use(express.json({limit: "30mb", extended: true}));
  middleware.use(express.urlencoded({limit: "30mb", extended: true}));
  middleware.use(cors());
  //endpoint ex. /users/signup
  middleware.use("/users", userRouter); 
  middleware.use("/dog", dogRouter);
};

export default serverMiddleware