import { Router } from "express";

import { profileController } from "../controllers";
import { Auth } from "../utils";
const router = Router();

router.get("/api/v1/:userName", profileController.getUser);
router.get("/api/v2/:id", profileController.getUserProfile);
router.patch("/api/v3", profileController.updateUser);
router.patch("/api/v4", profileController.updateUserPassword);
router.put("/api/follow", Auth, profileController.updateUserFollower);
router.put("/api/unfollow", Auth, profileController.updateUserUnFollower);
export default router;
