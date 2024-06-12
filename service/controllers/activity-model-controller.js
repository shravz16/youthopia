// Importing modules and services
import { setResponse, setError } from './response-handler.js'; // Importing response handler functions
import { setRequest } from "./request-handler.js"; // Importing request handler function
import * as activitymodelservices from '../services/activity-model-services.js'; // Importing activity model services

// Controller function for searching activities
export const search = async(request, response) => {
    try {
        // Set the request body using the setRequest function
        const body = setRequest(request.body);
        // Extract content from the body
        const content = body.volunteer;
        // Call the search function from activity model services
        const res = await activitymodelservices.search(content);
        // Set the response data with a success message and activity ID
        res.data = { message: "successful", activity_Id: res };
        // Set the response using setResponse function
        setResponse(res, response);
    } catch (error) {
        // Handle errors using setError function
        setError(error, response);
    }
};

// Controller function for updating activities
export const update = async(request, response) => {
    try {
        // Set the request body using the setRequest function
        const body = setRequest(request.body);
        // Extract content and activity ID from the request
        const content = { activity_Id: request.params.activity_Id, ...body.volunteer };
        // Call the edit function from activity model services
        const resp = await activitymodelservices.edit(content);
        // Set the response using setResponse function
        setResponse(resp, response);
    } catch (error) {
        // Handle errors using setError function
        setError(error, response);
    }
};

// Controller function for creating activities
export const post = async(request, response) => {
    try {
        // Set the request body using the setRequest function
        const body = setRequest(request.body);
        // Extract activity data from the body
        const activity = body.volunteer;
        // Call the save function from activity model services
        const createActivity = await activitymodelservices.save(activity);
        // Set the response using setResponse function
        setResponse(createActivity, response);
    } catch (error) {
        // Handle errors using setError function
        setError(error, response);
    }
};

// Controller function for getting activity details
export const get = async(request, response) => {
    try {
        // Extract activity ID from the request
        const activity_Id = request.params.activity_Id;
        // Call the get function from activity model services
        const resp = await activitymodelservices.get(activity_Id);
        // Set the response using setResponse function
        setResponse(resp, response);
    } catch (error) {
        // Handle errors using setError function
        setError(error, response);
    }
};

// Controller function for deleting activities
export const deleteActivity = async(request, response) => {
    try {
        // Extract activity ID from the request
        const activity_Id = request.params.activity_Id;
        // Call the deleteActivity function from activity model services
        const resp = await activitymodelservices.deleteActivity(activity_Id);
        // Set the response using setResponse function
        setResponse(resp, response);
    } catch (error) {
        // Handle errors using setError function
        setError(error, response);
    }
};