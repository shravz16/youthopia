import express from "express";
import * as commentController from "../controllers/comment-controller.js";


const router = express.Router();

router.route('/')
    .get(commentController.search)
    .post(commentController.post);
;

router.route('/:id')
    .get(commentController.get);


export default router;