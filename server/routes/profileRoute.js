import { Router } from "express";

import { profileController } from "../controllers";

const router = Router();

router.get("/api/v1/:userName", profileController.getUser);
router.get("/api/v2/:id", profileController.getUserProfile);
router.patch("/api/v3", profileController.updateUser);
router.patch("/api/v4", profileController.updateUserPassword);

export default router;
