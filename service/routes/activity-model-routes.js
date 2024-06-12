import express from "express";
import * as activitymodelcontroller from '../controllers/activity-model-controller.js'

const router = express.Router();

/**
 * Route to handle GET (search) and POST (create) requests for activities.
 * GET /activitymodels - Search for activities.
 * POST /activitymodels - Create a new activity.
 */
router.route('/').get(activitymodelcontroller.search).post(activitymodelcontroller.post);

/**
 * Route to handle GET (retrieve), PUT (update), and DELETE (delete) requests for a specific activity.
 * GET /activitymodels/:activity_Id - Retrieve a specific activity by ID.
 * PUT /activitymodels/:activity_Id - Update a specific activity by ID.
 * DELETE /activitymodels/:activity_Id - Delete a specific activity by ID.
 */
router.route('/:activity_Id').get(activitymodelcontroller.get)
                               .put(activitymodelcontroller.update)
                               .delete(activitymodelcontroller.deleteActivity);

export default router;
