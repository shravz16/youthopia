import skillsmodel from '../models/skillsmodel.js'
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
       const createskills = await skillmodel.find({
           date: {
               $gt: startDate,
               $lt: new Date(endDate).toISOString()
           }
       }).exec();
    
       return createskills;

   }
   const createskills = await skillsmodel.find(params).exec();

   return createactivity;

}
/**
 * Retrives all course object
 * @param {*} params 
 * @returns 
 */
export const get = async(skills_Id) => {
    const createskills = await skillsmodel.find({skills_Id}).exec();
    return createskills;
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
export const save = async(skills) => {
    skills.skills_Id = uuidv4();
    const createskills = new skillsmodel(skills);
    return await createskills.save();
}
    /**
     * 
     * @param {*} date
     * @returns 
     */

export const edit = async(skills) => {
    const createskills = await skillsmodel.updateOne({skills_Id:skills.skills_Id},skills).exec();
    return createskills;
}
//add delete 
export const deleteskills = async(skills) => {
    const createskills = await skillsmodel.deleteOne({skills_Id:skills}).exec();
    return createskills;
}