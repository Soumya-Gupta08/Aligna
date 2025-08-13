import { asyncHandler } from "../utils/asyncHandler";
import { Category } from '../models/category.models.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';  




const createCategory=asyncHandler(async (req, res) => {
    const { name } = req.body;

    if (!name) {
        throw new ApiError(400, "Category name is required");
    }

    const category = await Category.create({
        name,
        author: req.user._id
    });

    res.status(201).json(
        new ApiResponse(201, "Category created successfully", category)
    );


})

const getCategories = asyncHandler(async (req, res) => {

    const categories=await Category.find({author: req.user._id}).sort({createdAt: -1});

    return res.status(200).json(
        new ApiResponse(200, "Categories fetched successfully", categories)
    );
});


export { createCategory, getCategories };