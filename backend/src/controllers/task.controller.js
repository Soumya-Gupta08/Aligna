import { Task } from "../models/task.models";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { subCategory } from "../models/subCategory.models.js";
import { ApiResponse } from "../utils/apiResponse.js";


const createTask=asyncHandler(async (req, res) => {
    const { name, description, deadline, subCategoryId } = req.body;

    if(!name || !subCategoryId || !deadline) {
        throw new ApiError(400, "Missing required fields");
    }

    if(isNaN(new Date(deadline).getTime())) {
        throw new ApiError(400, "Invalid deadline format");
    }

    const subCat=await subCategory.findOne({_id:subCategoryId, author:req.user._id});
    if(!subCat) {
        throw new ApiError(404 ,"You are not authorised to create a task in this subcategory");
    }


    const createdTask = await Task.create({
        name,
        description: description || '',
        deadline,
        subCategoryId: subCategoryId,
        author: req.user._id
    });

    return res.status(201).json(
        new ApiResponse(201, "Task created successfully", createTask)
    )
});

const getTasks=asyncHandler(async (req, res) => {
    const { subCategoryId } = req.params;  // Getting subCategoryId from URL
    if (!subCategoryId) {
        throw new ApiError(400, "Subcategory ID is required");
    }

    const tasks=await Task.find({subCategoryId}).sort({createdAt: -1})
    
    return res.status(200).json(
        new ApiResponse(200, "Tasks fetched successfully", tasks)   
    );
});

export { createTask, getTasks };  

// const updateTask=asyncHandler(async (req, res) => {
//     const { taskId } = req.params;
//     const { name, description, subCategoryId, isCompleted } = req.body;

//     if (!taskId) {
//         throw new ApiError(400, "Task ID is required");
//     }

//     const updateFields = {};
//         if (name) updateFields.title = title;
//         if (description) updateFields.description = description;
//         if (subCategoryId) updateFields.subCategoryId = subCategoryId;
//         if (isCompleted) updateFields.isCompleted = isCompleted;

//     const task = await Task.findByIdAndUpdate(
//         taskId, updateFields, { new: true }
//     )
    
//     return res.status(200).json(
//         new ApiResponse(200, "Task updated successfully", task)
//     )
// });




