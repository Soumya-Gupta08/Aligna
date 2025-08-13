import { Router } from "express";
import { verifyJwt } from "../middlewares/Auth.middleware";
import { createTask, getTasks } from '../controllers/task.controller.js';

const router = Router();

router.route('/').post(verifyJwt, createTask);
router.route('/:subCategoryId').get(verifyJwt, getTasks);

export default router;