import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/apiError.js';
import { User } from '../models/user.models.js';

const registerUser=asyncHandler(async (req, res) => {
    
    const {username, email, password}=req.body;

    if(username==='') {
        throw new ApiError(400, "username is required");
    } else if(email==='') {
        throw new ApiError(400, "email is required");
    } else if(email==='') {
        throw new ApiError(400, "password is required");
    }

    const existedUser=User.findOne({
        $or: [{username}, {email}]
    })
    console.log(existedUser);
    
    if(existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }
    
    const user=await User.create({
        username: username.toLowerCase(),
        email,
        password
    })
    
    const createdUser=await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!createdUser) {
        throw new ApiError(500, "Something went wrong while registring")
    }


})

export {registerUser}; 