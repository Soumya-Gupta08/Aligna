import mongoose, { Schema } from "mongoose";

const TaskSchema=new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        default: ''
    },
    deadline: {
        type: Date,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    subCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subCategory',
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {timestamps: true});

export const Task=mongoose.model("Task", TaskSchema);