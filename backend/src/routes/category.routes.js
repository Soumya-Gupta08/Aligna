import { Router } from "express";
import { verifyJwt } from "../middlewares/Auth.middleware.js";
import { createCategory, getCategories } from '../controllers/category.controller.js';


const router = Router();

router.route('/').post(verifyJwt, createCategory);
router.route('/').get(verifyJwt, getCategories);

export default router;