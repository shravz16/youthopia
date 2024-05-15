import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    post_id: {
        type: String,
        required: true
    },


    youth: {
        type: Object,

    },

    likes: {
        type: Number,
        required: true
    },

    // date: {
    //     type: Date,
    //     required: true
    // },

    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    comment: {
        type: Array
    }
});

const model = mongoose.model('post', schema);

export default model;