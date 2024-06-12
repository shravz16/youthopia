import { setResponse, setError } from "./response-handler.js";
import { setRequest } from "./request-handler.js";
import * as youthServices from '../services/youth-accounts-services.js'

export const post = async(request, response) => {
    try {
        const body = setRequest(request.body);
        const content = body.profile_data;
        const res = await youthServices.save(content);
        const resp = {};
        resp.data = { message: "successful", youthId: res.youthId }
        setResponse(resp, response);
    } catch (error) {
        setError(error, response)
    }
}

export const put = async(request, response) => {
    try {
        const body = setRequest(request.body);
        const content = { youthId: request.params.id, ...body.profile_data };
        const resp = await youthServices.update(content);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response)
    }
}

export const get = async(request, response) => {
    try {

        const youthId = request.params.id;
        const resp = await youthServices.get(youthId);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response)
    }
}


export const search = async(request, response) => {
    try {

        const params = {...request.query };
        const resp = await youthServices.search(params);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response)
    }
}

export const deleteNote = async(request, response) => {
    try {

        const youthId = request.params.id;
        const resp = await youthServices.deleteNote(youthId);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response)
    }
}