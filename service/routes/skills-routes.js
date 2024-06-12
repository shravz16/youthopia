import express from "express";

import * as skillsroutecontroller from '../controllers/skillcontrollers.js'

const router = express.Router()

router.route('/').get(skillsroutecontroller.search).post(skillsroutecontroller.post);
router.route('/:skills_Id').get(skillsroutecontroller.get);
router.route('/:skills_Id').put(skillsroutecontroller.update)
router.route('/:skills_Id').delete(skillsroutecontroller.deleteskills);

export default router;