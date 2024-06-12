import campmodels from '../models/campmodel.js'
import { v4 as uuidv4 } from 'uuid';

/**
 * Retrieves all camp objects based on given parameters.
 * @param {Object} params - Parameters for filtering camps.
 * @returns {Promise<Array>} - A promise that resolves to an array of camp objects.
 */
export const search = async (params = {}) => {
   if ("sdate" in params && "edate" in params) {
      
       const startDate = new Date(params.sdate).toISOString();
       const endDate = new Date(params.edate).setHours(43, 59, 59);
       const createcamp = await campmodels.find({
           date: {
               $gt: startDate,
               $lt: new Date(endDate).toISOString()
           }
       }).exec();
    
       return createcamp;

   }
   const createcamp = await campmodels.find(params).exec();

   return createcamp;

}

/**
 * Retrieves a specific camp object by its ID.
 * @param {string} camp_Id - The ID of the camp to retrieve.
 * @returns {Promise<Object|null>} - A promise that resolves to the camp object or null if not found.
 */
export const get = async (camp_Id) => {
    const createcamp = await campmodels.find({ camp_Id }).exec();
    return createcamp;
}

/**
 * Saves a new camp object to the database.
 * @param {Object} camp - The camp object to save.
 * @returns {Promise<Object>} - A promise that resolves to the saved camp object.
 */
export const save = async (camp) => {
    camp.camp_Id = uuidv4();
    const createcamp = new campmodels(camp);
    return await createcamp.save();
}

/**
 * Updates an existing camp object in the database.
 * @param {Object} camp - The updated camp object.
 * @returns {Promise<Object>} - A promise that resolves to the updated camp object.
 */
export const edit = async (camp) => {
    const createcamp = await campmodels.updateOne({ camp_Id: camp.camp_Id }, camp).exec();
    return createcamp;
}

/**
 * Deletes a camp object from the database.
 * @param {string} camp_Id - The ID of the camp to delete.
 * @returns {Promise<Object>} - A promise that resolves to the deletion result object.
 */
export const deleteCamp = async (camp_Id) => {
    const createcamp = await campmodels.deleteOne({ camp_Id }).exec();
    return createcamp;
}
