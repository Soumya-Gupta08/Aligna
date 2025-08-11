import {Router} from 'express';
import { loginUser, registerUser, logoutUser } from '../controllers/user.controller.js';
import { verifyJwt } from '../middlewares/Auth.middleware.js';

const router=Router();

router.route('/register').post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJwt, logoutUser);

export default router;