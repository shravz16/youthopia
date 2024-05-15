import Comment from '../models/comment.js';
import Post from '../models/post.js';
import { v4 as uuidv4 } from 'uuid';

export const search = async(params) => {
    const comments = Comment.find(params).exec();
    return comments;
}

export const save = async(reply) => {
    reply.comment_id = uuidv4();
    console.log(reply.post_id);
    const comment = new Comment(reply);

    const updatePoss = await Post.findOneAndUpdate({ post_id: reply.post_id }, { $push: { "comment": comment } }, { safe: true, upsert: true })
    return await comment.save();
}

export const get = async(id) => {
    const comments = await Comment.findById(id).exec();
    return comments;
}