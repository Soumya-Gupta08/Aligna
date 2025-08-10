import mongoose from "mongoose";

new subCategorySchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Number
    },
    totalTasks: {
        type: Number
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
}, {timestamps: true});


export const subCategory=mongoose.model("subCategory", subCategorySchema);