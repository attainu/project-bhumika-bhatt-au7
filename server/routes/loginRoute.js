import { Router } from "express";

import { userController } from "../controllers";

const router = Router();

router.post("/api/v1", userController.login);
router.post("/reset", userController.reset);
router.post("/newPassword", userController.newPassword);

export default router;
