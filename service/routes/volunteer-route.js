import express from 'express';

import * as volunteerAccountController from '../controllers/volunteer-accounts-controllers.js'

const router = express.Router()

router.route('/volunteer').post(volunteerAccountController.post);
router.route('/volunteer/:id').put(volunteerAccountController.put);
router.route('/volunteer/:id').get(volunteerAccountController.get);
router.route('/volunteer/').get(volunteerAccountController.search);
router.route('/volunteer/:id').delete(volunteerAccountController.deleteNote);

export default router