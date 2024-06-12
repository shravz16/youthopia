import * as fundingServices from '../services/funding-services.js';
import {setResponse, setError} from './response-handler.js'

export const search = async (request, response) => {
    try{
        const params = {...request.query};
        console.log(params);
        const donations = await fundingServices.search(params);
        setResponse(donations, response);

    } catch(error){
        setError(error, response);
        }
}

export const post = async (request, response) => {
    try{
        const donation = {...request.body};
        const createDonation = await fundingServices.save(donation);
        setResponse(createDonation, response);

    } catch(error){
        setError(error, response);
    }
}

export const get = async (request, response) => {
    try{
        const donations = await fundingServices.get(request.params.id);
        setResponse(donations, response);

    } catch (error) {
        setError(error, response);
    }
}