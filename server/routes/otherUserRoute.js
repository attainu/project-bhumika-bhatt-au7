import { Router } from "express";

import { otherUserController } from "../controllers";
import { Auth } from "../utils";
const router = Router();

router.get("/user/:id", otherUserController.profile);

export default router;
