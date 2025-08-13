import e, { Router } from "express";
import { verifyJwt } from "../middlewares/Auth.middleware";
import { createSubCategory, getSubCategories } from '../controllers/subcategory.controller.js';

const router = Router();

router.route('/').post(verifyJwt, createSubCategory);
router.route('/:categoryId').get(verifyJwt, getSubCategories);

export default router;