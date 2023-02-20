import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connection from "./Config/db.js"
import userRouter from "./Routes/user.js";
import mongoose from 'mongoose';
import { errorHandler, notFound } from './Middleware/errorHandler.js';
dotenv.config();
const PORT =  process.env.PORT || 5000;
const app = express();

app.use(morgan("dev"));
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb", extended:true }));
app.use(cors())

// app.use("/",(req,res)=> {
//     res.send("Hi there, Welcome to my server!");
// })
app.use("/auth",userRouter);
mongoose.set('strictQuery', true);

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, ()=> {
    connection();
    console.log('listening on port '+PORT);
})