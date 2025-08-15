import { Task } from "../models/task.models.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { SubCategory } from "../models/subcategory.models.js";
import { ApiResponse } from "../utils/apiResponse.js";


const createTask=asyncHandler(async (req, res) => {
    const { name, description, deadline, subCategoryId } = req.body;

    if(!name || !subCategoryId || !deadline) {
        throw new ApiError(400, "Missing required fields");
    }

    if(isNaN(new Date(deadline).getTime())) {
        throw new ApiError(400, "Invalid deadline format");
    }

    const subCat=await SubCategory.findOne({_id:subCategoryId, author:req.user._id});
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
        new ApiResponse(201, "Task created successfully", createdTask)
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

const updateTaskCompletion=asyncHandler(async (req, res) => {
    const { taskId }=req.params;
    const { isCompleted } = req.body;

    const updatedTask=await Task.findByIdAndUpdate(
        taskId,
        { isCompleted: isCompleted },
        { new: true }
    );

    if(!updatedTask) {
        throw new ApiError(404, "Task not found");
    }

    return res.status(200).json(
        new ApiResponse(200, "Task completion status updated successfully", updatedTask)
    );  
})

export { createTask, getTasks, updateTaskCompletion };  





