import express from 'express';

import * as youthAccountController from '../controllers/youth-accounts-controllers.js'

const router = express.Router()

router.route('/youth').post(youthAccountController.post);
router.route('/youth/:id').put(youthAccountController.put);
router.route('/youth/:id').get(youthAccountController.get);
router.route('/youth').get(youthAccountController.search);
router.route('/youth/:id').delete(youthAccountController.deleteNote);

export default router