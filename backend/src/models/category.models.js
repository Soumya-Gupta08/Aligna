import mongoose from "mongoose";
import { subCategory } from "./subcategory.models";

const categorySchema=new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    percentage: {
        type: Number
    }, 
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subCategory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: subCategory
        }
    ]   
}, {timestamps: true});


export const Category=mongoose.model("Category", categorySchema);