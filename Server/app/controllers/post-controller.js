import * as postService from '../services/post-services.js';
import {setResponse, setError} from './response-handler.js'

export const search = async (request, response) => {
    try{
        const params = {...request.query};
        const posts = await postService.search(params);
        setResponse(posts, response);

    } catch(error){
        setError(error, response);
        }
}

export const post = async (request, response) => {
    try{
        const post = {...request.body};
        const createPost = await postService.save(post);
        setResponse(createPost, response);

    } catch(error){
        setError(error, response);
    }
}

export const get = async (request, response) => {
    try{
        const posts = await postService.get(request.params.id);
        setResponse(posts, response);

    } catch (error) {
        setError(error, response);
    }
}

export const put = async (request, response) => {
    try {
        const id = request.params.id;
        const postData = request.body;

        const updatedPost = await postService.update(id, postData);
        setResponse(updatedPost, response);
    } catch (error) {
        setError(error, response);
    }
}

export const deletePost = async (request, response) => {
    try {
        const id = request.params.id;

        const deletedPost = await postService.deletePost(id);
        setResponse(deletedPost, response);
    } catch (error) {
        setError(error, response);
    }
}