import { Category } from "../models/category.models.js";
import { SubCategory } from '../models/subcategory.models.js'
import { Task } from "../models/task.models.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";



const createSubCategory=asyncHandler(async (req, res) => {
    const { name, categoryId } = req.body;

    if(!name || !categoryId) {
        throw new ApiError(400, "Missing required fields");
    }

    const cat=await Category.findOne({_id: categoryId, author: req.user._id});
    if(!cat) {
        throw new ApiError(404, "You are not authorised to create a subcategory in this category"); 
    }
    
    const createdSubCategory = await SubCategory.create({
        name,
        categoryId,
        author: req.user._id
    });

    return res.status(201).json(
        new ApiResponse(201, "Subcategory created successfully", createdSubCategory)
    )
});

const getSubCategories=asyncHandler(async (req, res) => {
    const { categoryId } = req.params;  // Getting categoryId from URL
    if( !categoryId) {
        throw new ApiError(400, "Category ID is required");
    }

    const subCategories=await SubCategory.find({categoryId}).sort({createdAt: -1});  // returns array of subcategories

    // const taskCounts=await Task.aggregate([
    //     { $match: { subCategories: { $in: subCategories.map((sub) => {return sub._id})}}},
    //     { $group: {
    //         _id: '$subCategoryId',
    //         totalTasks: { $sum: 1 },
    //         completedTasks: { $sum: {  $cond: ['$isCompleted', 1, 0] }}
    //     }}
    // ])

    // const subCategoriesWithProgressTasks=subCategories.map((sub) => {
    //     const cnts=taskCounts.find((cnt) => )
    // })
    
    return res.status(200).json({
        success: true,
        message: "Subcategories fetched successfully",
        data: subCategories
    });
});

export { createSubCategory, getSubCategories };