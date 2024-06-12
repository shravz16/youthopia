import VolunteerModel from '../models/volunteer-model.js';
import { v4 as uuidv4 } from 'uuid';

export const save = async(details) => {
    details.volunteerId = uuidv4();
    console.log(details)
    const postDetails = new VolunteerModel(details);
    return await postDetails.save()

}
export const update = async(details) => {
    console.log(details)
    const result = await VolunteerModel.updateOne({ volunteerId: details.volunteerId }, details).exec();
    return result;
}
export const search = async(details) => {
    console.log(details)
    const result = await VolunteerModel.find(details).exec();
    return result;
}

export const get = async(details) => {
    const result = await VolunteerModel.find({ volunteerId: details }).exec();
    return result;
}

export const deleteNote = async(details) => {
    console.log(details.id);
    const result = await VolunteerModel.deleteOne({ volunteerId: details }).exec();
    return result;
}