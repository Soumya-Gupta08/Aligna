import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app=express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser());


// routes

import userRouter from './routes/user.routes.js';
import categoryRouter from './routes/category.routes.js';
import subCategoryRouter from './routes/subcategory.routes.js';
import taskRouter from './routes/task.routes.js';


app.use('/users', userRouter);
app.use('/categories', categoryRouter);
app.use('/subcategories', subCategoryRouter);
app.use('/tasks', taskRouter);



// Handling errors coming from async handlers

import { ApiError } from "./utils/apiError.js";

app.use((err, req, res, next) => {
    console.error(err);

    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            errors: err.errors
        });
    }

    res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});



export default app;

