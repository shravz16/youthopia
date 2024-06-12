import express from "express";
import * as fundingController from "../controllers/funding-controller.js";


const router = express.Router();

router.route('/fundings')
    .get(fundingController.search)
    .post(fundingController.post);
;

router.route('/fundings/:id')
    .get(fundingController.get);


export default router;