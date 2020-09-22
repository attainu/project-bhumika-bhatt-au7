import { Router } from "express";

import { userController } from "../controllers";
import { signupValidator } from "../validators";

const router = Router();

router.post("/api/v1", signupValidator, userController.signup);

export default router;
