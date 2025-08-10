import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import dotenv from "dotenv";

const app=express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true

}))


export {app};

