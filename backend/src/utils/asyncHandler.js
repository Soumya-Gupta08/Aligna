const asyncHandler = (funct) => {
    (req, res, next) => {
        Promise.resolve((funct(req, res, next)))
        .catch((err) => next(err));
    }
}

export {asyncHandler};