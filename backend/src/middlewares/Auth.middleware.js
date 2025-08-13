import { User } from "../models/user.models.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken';


export const verifyJwt=asyncHandler(async(req, res, next) => {
    try {
        const token=req.cookies?.accessToken;
        if(!token) {
            throw new ApiError(401, "Unauthorised request")
        }

        const decodedToken=jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const user=await User.findById(decodedToken?._id).select("-password -refreshToken");

        if(!user) {
            throw new ApiError(401, "User not found");
        }
        req.user=user;
        next();

    } catch (error) {
        throw new ApiError(401, "Invalid Access Token")
    }
})