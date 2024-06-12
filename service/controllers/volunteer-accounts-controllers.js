import { setResponse, setError } from "./response-handler.js";
import { setRequest } from "./request-handler.js";
import * as volunteerServices from '../services/volunteer-accounts-services.js'

export const post = async(request, response) => {
    try {
        const body = setRequest(request.body);
        const content = body.profile_data;
        const res = await volunteerServices.save(content);
        const resp = {};
        resp.data = { message: "successful", volunteerId: res.volunteerId }
        setResponse(resp, response);
    } catch (error) {
        setError(error, response)
    }
}
export const search = async(request, response) => {
    try {

        const params = {...request.query };
        const resp = await volunteerServices.search(params);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response)
    }
}

export const put = async(request, response) => {
    try {
        const body = setRequest(request.body);
        const content = { volunteerId: request.params.id, ...body.profile_data };
        const resp = await volunteerServices.update(content);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response)
    }
}

export const get = async(request, response) => {
    try {

        const volunteerId = request.params.id;
        const resp = await volunteerServices.get(volunteerId);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response)
    }
}

export const deleteNote = async(request, response) => {
    try {

        const volunteerId = request.params.id;
        const resp = await volunteerServices.deleteNote(volunteerId);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response)
    }
}