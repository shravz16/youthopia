import YouthModel from '../models/youth-model.js';
import { v4 as uuidv4 } from 'uuid';

export const save = async(details) => {
    const exists = await YouthModel.exists({ email: details.email })
    if (exists !== null) {
        throw "Already exists";
    }
    details.youthId = uuidv4();
    console.log(details)
    const postDetails = new YouthModel(details);
    const response = await postDetails.save();
    return await postDetails.save()

}

export const update = async(details) => {
    console.log(details)
    const result = await YouthModel.updateOne({ youthId: details.youthId }, details).exec();
    return result;
}

export const get = async(details) => {
    const result = await YouthModel.find({ youthId: details }).exec();
    return result;
}

export const search = async(details) => {
    console.log(details)
    const result = await YouthModel.find(details).exec();
    return result;
}
export const deleteNote = async(details) => {
    console.log(details.id);
    const result = await YouthModel.deleteOne({ youthId: details }).exec();
    return result;
}