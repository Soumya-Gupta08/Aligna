import { Category } from "../models/category.models";
import { subCategory } from "../models/subCategory.models";
import { ApiError } from "../utils/apiError";
import { ApiResponse } from "../utils/apiResponse";
import { asyncHandler } from "../utils/asyncHandler";



const createSubCategory=asyncHandler(async (req, res) => {
    const { name, categoryId } = req.body;

    if(!name || !categoryId) {
        throw new ApiError(400, "Missing required fields");
    }

    const cat=await Category.findOne({_id: categoryId, author: req.user._id});
    if(!cat) {
        throw new ApiError(404, "You are not authorised to create a subcategory in this category"); 
    }
    
    const createdSubCategory = await subCategory.create({
        name,
        categoryId,
        author: req.user._id
    });

    return res.statis(201).json(
        new ApiResponse(201, "Subcategory created successfully", createdSubCategory)
    )
});

const getSubCategories=asyncHandler(async (req, res) => {
    const { categoryId } = req.params;  // Getting categoryId from URL
    if( !categoryId) {
        throw new ApiError(400, "Category ID is required");
    }

    const subCategories=await subCategory.find({categoryId}).sort({createdAt: -1})
    
    return res.status(200).json({
        success: true,
        message: "Subcategories fetched successfully",
        data: subCategories
    });
});

export { createSubCategory, getSubCategories };