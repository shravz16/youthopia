import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    volunteer_id: {
        type: Number,
        required: true
    },

    donation_id: {
        type: Number,
        required: true
    },

    funding_id: {
        type: Number,
        required: true
    },

    // date: {
    //     type: Date,
    //     required: true
    // },

    category: {
        type: String,
        required: true
    },
    
    ssn: {
        type: String,
        required: true
    },

    amount:{
        type: Number,
        required: true
    }
});

const model = mongoose.model('funding', schema);

export default model;