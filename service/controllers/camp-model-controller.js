import { setResponse, setError } from './response-handler.js'; // Importing response handler functions
import { setRequest } from "./request-handler.js"; // Importing request handler function
import * as campmodelservices from '../services/camp-model-services.js'; // Importing camp model services

/**
 * Controller function for searching camps.
 * @param {Object} request - The HTTP request object.
 * @param {Object} response - The HTTP response object.
 */
export const search = async (request, response) => {
    try {
        const body = setRequest(request.body); // Set the request body using the setRequest function
        const content = body.camp; // Extract content from the body
        const res = await campmodelservices.search(content); // Call the search function from camp model services

        // Set the response data with a success message and camp ID
        res.data = { message: "successful", camp_Id: res };
        // Set the response using setResponse function
        setResponse(res, response);
    } catch (error) {
        // Handle errors using setError function
        setError(error, response);
    }
};

/**
 * Controller function for updating camps.
 * @param {Object} request - The HTTP request object.
 * @param {Object} response - The HTTP response object.
 */
export const update = async (request, response) => {
    try {
        const body = setRequest(request.body); // Set the request body using the setRequest function
        console.log(request.params.camp_Id);
        // Extract content and camp ID from the request
        const content = { camp_Id: request.params.camp_Id, ...body.camp };
        // Call the edit function from camp model services
        const resp = await campmodelservices.edit(content);
        // Set the response using setResponse function
        setResponse(resp, response);
    } catch (error) {
        // Handle errors using setError function
        setError(error, response);
    }
};

/**
 * Controller function for creating camps.
 * @param {Object} request - The HTTP request object.
 * @param {Object} response - The HTTP response object.
 */
export const post = async (request, response) => {
    try {
        const body = setRequest(request.body); // Set the request body using the setRequest function
        const camp = body.camp; // Extract camp data from the body
        // Call the save function from camp model services
        const createCamp = await campmodelservices.save(camp);
        // Set the response using setResponse function
        setResponse(createCamp, response);
    } catch (error) {
        // Handle errors using setError function
        setError(error, response);
    }
};

/**
 * Controller function for getting camp details.
 * @param {Object} request - The HTTP request object.
 * @param {Object} response - The HTTP response object.
 */
export const get = async (request, response) => {
    try {
        const camp_Id = request.params.camp_Id; // Extract camp ID from the request
        // Call the get function from camp model services
        const resp = await campmodelservices.get(camp_Id);
        // Set the response using setResponse function
        setResponse(resp, response);
    } catch (error) {
        // Handle errors using setError function
        setError(error, response);
    }
};

/**
 * Controller function for deleting camps.
 * @param {Object} request - The HTTP request object.
 * @param {Object} response - The HTTP response object.
 */
export const deleteCamp = async (request, response) => {
    try {
        const camp_Id = request.params.camp_Id; // Extract camp ID from the request
        // Call the deleteCamp function from camp model services
        const resp = await campmodelservices.deleteCamp(camp_Id);
        // Set the response using setResponse function
        setResponse(resp, response);
    } catch (error) {
        // Handle errors using setError function
        setError(error, response);
    }
};
