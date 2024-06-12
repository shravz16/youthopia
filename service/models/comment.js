import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    comment_id: {
        type: String,
        required: true
    },

    youth: {
        type: Object,
        required: true
    },

    // date: {
    //     type: Date,
    //     required: true
    // },

    comment: {
        type: String,
        required: true
    }

});

const model = mongoose.model('comment', schema);

export default model;