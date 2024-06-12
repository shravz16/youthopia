import express from "express";

import * as newsroutescontroller from '../controllers/newscontrollers.js';

const router = express.Router()

router.route('/').get(newsroutescontroller.search).post(newsroutescontroller.post);
router.route('/:news_Id').get(newsroutescontroller.get);
router.route('/:news_Id').put(newsroutescontroller.update)
router.route('/:news_Id').delete(newsroutescontroller.deleteNews);

export default router;