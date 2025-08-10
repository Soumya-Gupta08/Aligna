import mongoose, { Mongoose } from "mongoose";
import { subCategory } from "./subcategory.models";

new categorySchema=new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    Percentage: {
        type: Number
    }, 
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subCategory: [
        {
            type: Mongoose.Schema.Types.ObjectId,
            ref: subCategory
        }
    ]   
}, {timestamps: true});


export const Category=mongoose.model("Category", categorySchema);