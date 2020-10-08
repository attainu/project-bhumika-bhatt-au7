import { Router } from "express";

import { chatController } from "../controllers";

const router = Router();

router.post("/api/v1", chatController.create);
router.get("/api/v2/:room", chatController.get);
router.post("/api/v3", chatController.delete);

export default router;
