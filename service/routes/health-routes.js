import express from "express";

import * as healthroutescontroller from '../controllers/healthcontrollers.js'

const router = express.Router()

router.route('/').get(healthroutescontroller.search).post(healthroutescontroller.post);
router.route('/:health_Id').get(healthroutescontroller.get);
router.route('/:health_Id').put(healthroutescontroller.update)
router.route('/:health_Id').delete(healthroutescontroller.deleteHealth);

export default router;