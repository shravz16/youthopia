import { setResponse, setError } from './response-handlers.js';
import { setRequest } from './request-handler.js';
import * as healthmodelsservices from '../services/health-model-services.js';
// get all meetings
export const search = async(request, response) => {
    try {
        const body = setRequest(request.body);
        const content = body.health;
        const res = await healthmodelsservices.search(content);
        const resp = {};
        resp.data = { message: "succesful", health_Id: res.health_Id }
        setResponse(resp, response);
    } catch (error) {
        setError(error, response);
    }
}

// filter meeting notes using input tilte, startdate, enddate
export const update = async(request, response) => {
    try {
        const body = setRequest(request.body);
        const content = { health_Id: request.params.health_Id, ...body.health };
        const resp = await healthmodelsservices.edit(content);

        setResponse(resp, response);

    } catch (error) {
        setError(error, response);
    }
};

// addingnotes
export const get = async(request, response) => {

    try {
        const health_Id = request.params.health_Id;
        const resp = await healthmodelsservices.get(health_Id);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response);
    }
};

export const post = async(request, response) => {

    try {
        const body = setRequest(request.body);
        const content = body.health;
        console.log(content, "ps")

        const createHealth = await healthmodelsservices.save(content);

        setResponse(createHealth, response);
    } catch (error) {
        setError(error, response);
    }
};
//delete notes
export const deleteHealth = async(request, response) => {

    try {
        const health_Id = request.params.health_Id;
        const resp = await healthmodelsservices.deleteHealth(health_Id);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response);
    }
};