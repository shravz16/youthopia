import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    loginId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        require: true
    }
})

const model = mongoose.model('login', Schema);

export default model;