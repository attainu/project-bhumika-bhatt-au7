import { Router } from "express";

import { profileController } from "../controllers";

const router = Router();

router.get("/api/v1/:userName", profileController.getUser);
router.patch("/api/v2", profileController.updateUser);
router.patch("/api/v3", profileController.updateUserPassword);

export default router;
