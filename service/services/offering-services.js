import Offering from '../models/offering.js';

export const search = async (params) => {
    const offerings = Offering.find(params).exec();
    return offerings;
}

export const save = async (offer) => {
    const offering = new Offering(offer);
    return offering.save();
}

export const get = async (id) => {
    const offerings = await Offering.findById(id).exec();
    return offerings;
}