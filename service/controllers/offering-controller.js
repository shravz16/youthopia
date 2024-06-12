import * as offeringService from '../services/offering-services.js';
import {setResponse, setError} from './response-handler.js'

export const search = async (request, response) => {
    try{
        const params = {...request.query};
        const offerings = await offeringService.search(params);
        setResponse(offerings, response);

    } catch(error){
        setError(error, response);
        }
}

export const post = async (request, response) => {
    try{
        const offering = {...request.body};
        const createOffering = await offeringService.save(offering);
        setResponse(createOffering, response);

    } catch(error){
        setError(error, response);
    }
}

export const get = async (request, response) => {
    try{
        const offerings = await offeringService.get(request.params.id);
        setResponse(offerings, response);

    } catch (error) {
        setError(error, response);
    }
}