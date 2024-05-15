import * as commentService from '../services/comment-service.js';
import { setResponse, setError } from './response-handler.js'

export const search = async(request, response) => {
    try {
        const params = {...request.query };
        const comments = await commentService.search(params);
        setResponse(comments, response);

    } catch (error) {
        setError(error, response);
    }
}

export const post = async(request, response) => {
    try {
        const comment = {...request.body };
        console.log(comment)
        const createComment = await commentService.save(comment);
        setResponse(createComment, response);

    } catch (error) {
        setError(error, response);
    }
}

export const get = async(request, response) => {
    try {
        const comments = await commentService.get(request.params.id);
        setResponse(comments, response);

    } catch (error) {
        setError(error, response);
    }
}