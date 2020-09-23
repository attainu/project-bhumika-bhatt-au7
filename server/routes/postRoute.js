import { Router } from "express";

import { postController } from "../controllers";
import { Auth } from "../utils";

const router = Router();

router.get("/", Auth, postController.posts);
router.post("/createPost", Auth, postController.createPost);
router.get("/myPost", Auth, postController.myPosts);
router.get("/onePost/:postId", Auth, postController.onePost);
router.put("/like", Auth, postController.likePost);
router.put("/unlike", Auth, postController.unlikePost);
router.put("/comment", Auth, postController.commentPost);
router.delete("/delete/:postId", Auth, postController.deletePost);

export default router;
