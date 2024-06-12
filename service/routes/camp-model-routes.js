import express from "express";
import * as campmodelscontroller from '../controllers/camp-model-controller.js'

const router = express.Router();

/**
 * Route to handle GET (search) and POST (create) requests for camps.
 * GET /campmodels - Search for camps.
 * POST /campmodels - Create a new camp.
 */
router.route('/').get(campmodelscontroller.search).post(campmodelscontroller.post);

/**
 * Route to handle GET (retrieve), PUT (update), and DELETE (delete) requests for a specific camp.
 * GET /campmodels/:camp_Id - Retrieve a specific camp by ID.
 * PUT /campmodels/:camp_Id - Update a specific camp by ID.
 * DELETE /campmodels/:camp_Id - Delete a specific camp by ID.
 */
router.route('/:camp_Id').get(campmodelscontroller.get)
                          .put(campmodelscontroller.update)
                          .delete(campmodelscontroller.deleteCamp);

export default router;
