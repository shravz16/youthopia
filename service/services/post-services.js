import Post from '../models/post.js';
import { v4 as uuidv4 } from 'uuid';

export const search = async(params) => {
    const posts = Post.find(params).exec();
    return posts;
}

export const save = async(posts) => {
    posts.post_id = uuidv4();
    const post = new Post(posts);
    return post.save();
}

export const get = async(id) => {
    const posts = await Post.findById(id).exec();
    return posts;
}

export const update = async(id, postData) => {
    const updatedPost = await Post.findOneAndUpdate({ post_id: id }, postData, { new: true }).exec();
    return updatedPost;
}

export const deletePost = async(id) => {
    const deletedPost = await Post.findByIdAndDelete(id).exec();
    return deletedPost;
}