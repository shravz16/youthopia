import FundingModel from '../models/fundings.js';

export const search = async (params) => {
    const donations = FundingModel.find(params).exec();
    return donations;
}

export const save = async (donate) => {
    const donation = new FundingModel(donate);
    return donation.save();
}

export const get = async (id) => {
    const donations = await FundingModel.findById(id).exec();
    return donations;
}