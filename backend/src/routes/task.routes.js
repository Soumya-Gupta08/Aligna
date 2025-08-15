import { Router } from "express";
import { verifyJwt } from "../middlewares/Auth.middleware.js";
import { createTask, getTasks, updateTaskCompletion } from '../controllers/task.controller.js';

const router = Router();

router.route('/').post(verifyJwt, createTask);
router.route('/:subCategoryId').get(verifyJwt, getTasks);
router.route("/:taskId").patch(verifyJwt, updateTaskCompletion);

export default router;