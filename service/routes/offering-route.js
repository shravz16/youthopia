import express from "express";
import * as offeringController from "../controllers/offering-controller.js";


const router = express.Router();

router.route('/offerings')
    .get(offeringController.search)
    .post(offeringController.post);
;

router.route('/offerings/:id')
    .get(offeringController.get);


export default router;