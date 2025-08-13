import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/apiError.js';
import { User } from '../models/user.models.js';
import { ApiResponse } from '../utils/apiResponse.js';


const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

const registerUser=asyncHandler(async (req, res) => {
    
    const {username, email, password}=req.body;
    

    if(username==='') {
        throw new ApiError(400, "username is required");
    } else if(email==='') {
        throw new ApiError(400, "email is required");
    } else if(email==='') {
        throw new ApiError(400, "password is required");
    }

    const existedUser=await User.findOne({
        $or: [{username}, {email}]
    })
    
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

    return res.status(201).json(
        new ApiResponse(201, "User registered successfully", createdUser)
    )

})

const loginUser=asyncHandler(async (req, res) => {
    const {username, password}=req.body;

    if(!username) {
        throw new ApiError(400, "username is required");
    }

    const user=await User.findOne({username})

    if(!user) {
        throw new ApiError(404, "User doesn't exist");
    }

    const isPasswordValid=await user.isPasswordCorrect(password)

    if(!isPasswordValid) {
        throw new ApiError(401, "Invalid Credentials");
    }
    const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(200, 
        "User logged In Successfully",
            {
                user: loggedInUser, accessToken, refreshToken
            },
            
        ))
})

const logoutUser=asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id, 
        { $unset: {refreshToken: 1}}, {new: true}
    )

    const options={
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out Successfully"))

})

export {registerUser, loginUser, logoutUser}; 