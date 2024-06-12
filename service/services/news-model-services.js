import newsmodel from '../models/newsmodel.js'
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
            const createnews = await newsmodel.find({
                date: {
                    $gt: startDate,
                    $lt: new Date(endDate).toISOString()
                }
            }).exec();

            return createnews;

        }
        const createnews = await newsmodel.find(params).exec();

        return createnews;

    }
    /**
     * Retrives all course object
     * @param {*} params 
     * @returns 
     */
export const get = async(news_Id) => {
        const createnews = await newsmodel.find({ news_Id_ }).exec();
        return createnews;
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
export const save = async(news) => {
        news.news_Id = uuidv4();
        const createnews = new newsmodel(news);
        return await createnews.save();
    }
    /**
     * 
     * @param {*} date
     * @returns 
     */

export const edit = async(news) => {
        const createnews = await newsmodel.updateOne({ news_Id: news.news_Id }, news).exec();
        return createnews;
    }
    //add delete 
export const deletenews = async(news) => {
    const createnews = await newsmodel.deleteOne({ news_Id: news }).exec();
    return createnews;
}