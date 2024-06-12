import { setResponse, setError } from './response-handlers.js';
import { setRequest } from './request-handler.js';
import * as newsServices from '../services/news-model-services.js';

// Search for news
export const search = async(request, response) => {
    try {

        const content = request.params;
        const res = await newsServices.search(content);
        const resp = { data: { message: "successful", newsId: res.newsId } };
        setResponse(res, response);
    } catch (error) {
        setError(error, response);
    }
};

// Update news
export const update = async(request, response) => {
    try {
        const body = setRequest(request.body);
        const content = { newsId: request.params.newsId, ...body.news };
        const resp = await newsServices.update(content);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response);
    }
};

// Get news details
export const get = async(request, response) => {
    try {
        const newsId = request.params.newsId;
        const resp = await newsServices.get(newsId);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response);
    }
};

// Create new news
export const post = async(request, response) => {
    try {
        const body = setRequest(request.body);
        const content = body.news;
        const createdNews = await newsServices.post(content);
        setResponse(createdNews, response);
    } catch (error) {
        setError(error, response);
    }
};

// Delete news
export const deleteNews = async(request, response) => {
    try {
        const newsId = request.params.newsId;
        const resp = await newsServices.deleteNews(newsId);
        setResponse(resp, response);
    } catch (error) {
        setError(error, response);
    }
};