import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connection from "./Config/db.js"
import userRouter from "./Routes/user.js";
import mongoose from 'mongoose';
import cookieParser from "cookie-parser"
import { errorHandler, notFound } from './Middleware/errorHandler.js';
import { productRouter } from './Routes/product.js';
dotenv.config();
const PORT =  process.env.PORT || 5000;
const app = express();

app.use(morgan("dev"));
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb", extended:true }));
app.use(cors())
app.use(cookieParser())

// app.use("/",(req,res)=> {
//     res.send("Hi there, Welcome to my server!");
// })
app.use("/auth",userRouter);
app.use("/product",productRouter);

app.use(errorHandler);
mongoose.set('strictQuery', true);

app.use(notFound);
app.listen(PORT, ()=> {
    connection();
    console.log('listening on port '+PORT);
})