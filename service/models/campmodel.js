import mongoose from "mongoose";

// Define the schema for the camp model
const Schema = new mongoose.Schema({
    camp_Id: {
        type: String,
        required: true,
        description: "Unique identifier for the camp."
    },
    title: {
        type: String,
        required: true,
        description: "Title of the camp."
    },
    description: {
        type: String,
        required: true,
        description: "Description of the camp."
    },
    location: {
        type: Array,
        required: true,
        description: "Array containing location details for the camp."
    },
    volunteer_id: {
        type: String,
        required: true,
        description: "Unique identifier for the volunteer associated with the camp."
    },
    date: {
        type: String,
        required: true,
        description: "Date of the camp."
    }
});

// Create a model based on the schema
const model = mongoose.model('campmodels', Schema);

export default model;
