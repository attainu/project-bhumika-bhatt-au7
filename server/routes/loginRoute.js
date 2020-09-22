import { Router } from "express";

import { userController } from "../controllers";

const router = Router();

router.post("/api/v1", userController.login);

export default router;
