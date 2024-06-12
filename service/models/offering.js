import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    volunteer_id: {
        type: Number,
    },

    donation_id: {
        type: Number,

    },

    offering_id: {
        type: Number,
    },

    // date: {
    //     type: Date,
    //     required: true
    // },
    donationType: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },
    
    pin: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    }
});

const model = mongoose.model('offering', schema);

export default model;