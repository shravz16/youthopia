import { setResponse, setError } from './response-handlers.js';
import { setRequest } from './request-handler.js';
import * as skillServices from '../services/skills-model-services.js';

// Search for skills
export const search = async(request, response) => {
    try {
        const body = setRequest(request.body);
        const content = body.skill;
        const res = await skillServices.search(content);
        const resp = { data: { message: "successful", skillId: res.skillId } };
        setResponse(resp, response);
    } catch (error) {
        setError(error, response);
    }
};

// Update skills
export const update = async(request, response) => {
    try {
        const body = setRequest(request.body);
        const content = { skillId: request.params.skillId, ...body.skill };
        const resp = await skillServices.update(content);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response);
    }
};

// Get skill details
export const get = async(request, response) => {
    try {
        const skillId = request.params.skillId;
        const resp = await skillServices.get(skillId);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response);
    }
};

// Create new skill
export const post = async(request, response) => {
    try {
        const body = setRequest(request.body);
        const content = body.skill;
        const createdSkill = await skillServices.post(content);
        setResponse(createdSkill, response);
    } catch (error) {
        setError(error, response);
    }
};

// Delete skill
export const deleteskills = async(request, response) => {
    try {
        const skillId = request.params.skillId;
        const resp = await skillServices.deleteskills(skillId);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response);
    }
};