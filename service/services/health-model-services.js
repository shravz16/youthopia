import healthmodel from '../models/healthmodels.js'
import { v4 as uuidv4 } from 'uuid';
/**
* Retrives all notes object
* @param {*} params 
* @returns 
*/
export const search = async(params = {}) => {
   if ("sdate" in params && "edate" in params) {
      
       const startDate = new Date(params.sdate).toISOString();
       const endDate = new Date(params.edate).setHours(43, 59, 59);
       console.log(startDate + " " + new Date(endDate).toISOString())
       const createhealth = await healthmodel.find({
           date: {
               $gt: startDate,
               $lt: new Date(endDate).toISOString()
           }
       }).exec();
    
       return createhealth;

   }
   const createhealth = await healthmodel.find(params).exec();

   return createhealth;

}
/**
 * Retrives all course object
 * @param {*} params 
 * @returns 
 */
export const get = async(health_Id) => {
    const createhealth = await healthmodel.find({health_Id}).exec();
    return createhealth;
}
    /**
     * 
     * @param {*} note
     * @returns 
     */
// export const save = async(registration) => {`
//         const registrations = new CourseRegistration(registration);
//         return await registrations.save();
//     }
export const save = async(health) => {
    health.health_Id = uuidv4();
    const createhealth = new healthmodel(health);
    return await createhealth.save();
}
    /**
     * 
     * @param {*} date
     * @returns 
     */

export const edit = async(health) => {
    const createhealth = await healthmodel.updateOne({health_Id:health.health_Id},health).exec();
    return createhealth;
}
//add delete 
export const deleteHealth = async(health) => {
    const createhealth = await healthmodel.deleteOne({health_Id:health}).exec();
    return createhealth;
}