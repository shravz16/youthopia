import express from "express";
import * as postController from "../controllers/post-controller.js";


const router = express.Router();

router.route('/')
    .get(postController.search)
    .post(postController.post);
;

router.route('/:id')
    .get(postController.get)
    .put(postController.put)
    .delete(postController.deletePost);

export default router;