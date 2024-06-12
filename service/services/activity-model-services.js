import activitymodels from '../models/activitymodel.js'
import { v4 as uuidv4 } from 'uuid';

/**
 * Retrieves all activity objects based on given parameters.
 * @param {Object} params - Parameters for filtering activities.
 * @returns {Promise<Array>} - A promise that resolves to an array of activity objects.
 */
export const search = async (params = {}) => {
    if ("sdate" in params && "edate" in params) {
        const startDate = new Date(params.sdate).toISOString();
        const endDate = new Date(params.edate).setHours(43, 59, 59);
        const createactivity = await activitymodels.find({
            date: {
                $gt: startDate,
                $lt: new Date(endDate).toISOString()
            }
        }).exec();

        return createactivity;
    }
    const createactivity = await activitymodels.find(params).exec();
    return createactivity;
}

/**
 * Retrieves a specific activity object by its ID.
 * @param {string} activity_Id - The ID of the activity to retrieve.
 * @returns {Promise<Object|null>} - A promise that resolves to the activity object or null if not found.
 */
export const get = async (activity_Id) => {
    const createactivity = await activitymodels.find({ activity_Id }).exec();
    return createactivity;
}

/**
 * Saves a new activity object to the database.
 * @param {Object} activity - The activity object to save.
 * @returns {Promise<Object>} - A promise that resolves to the saved activity object.
 */
export const save = async (activity) => {
    activity.activity_Id = uuidv4();
    const createactivity = new activitymodels(activity);
    return await createactivity.save();
}

/**
 * Updates an existing activity object in the database.
 * @param {Object} activity - The updated activity object.
 * @returns {Promise<Object>} - A promise that resolves to the updated activity object.
 */
export const edit = async (activity) => {
    const createactivity = await activitymodels.updateOne({ activity_Id: activity.activity_Id }, activity).exec();
    return createactivity;
}

/**
 * Deletes an activity object from the database.
 * @param {string} activity_Id - The ID of the activity to delete.
 * @returns {Promise<Object>} - A promise that resolves to the deletion result object.
 */
export const deleteActivity = async (activity_Id) => {
    const createactivity = await activitymodels.deleteOne({ activity_Id }).exec();
    return createactivity;
}
