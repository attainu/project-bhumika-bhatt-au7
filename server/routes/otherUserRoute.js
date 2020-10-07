import { Router } from "express";

import { otherUserController } from "../controllers";
import { Auth } from "../utils";
const router = Router();

router.get("/:id", Auth, otherUserController.profile);
router.post("/search", otherUserController.search);

export default router;
