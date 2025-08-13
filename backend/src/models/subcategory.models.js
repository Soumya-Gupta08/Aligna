import mongoose from "mongoose";

const subCategorySchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    totalTasks: {
        type: Number
    }
    
}, {timestamps: true});


export const subCategory=mongoose.model("subCategory", subCategorySchema);