import mongoose, { Schema } from "mongoose";

const TaskSchema=new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    subCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subCategory',
        required: true
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
}, {timestamps: true});

export const Task=mongoose.model("Task", TaskSchema);