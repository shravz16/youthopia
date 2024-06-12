import mongoose from "mongoose";

// Define the schema for the activity model
const Schema = new mongoose.Schema({
    activity_Id: {
        type: String,
        required: true,
        description: "Unique identifier for the activity."
    },
    description: {
        type: String,
        required: true,
        description: "Description of the activity."
    },
    title: {
        type: String,
        required: true,
        description: "Title of the activity."
    },
    total_youth: {
        type: String,
        required: true,
        description: "Total number of youth attendees for the activity."
    },
    location: {
        type: Array,
        required: true,
        description: "Array containing location details for the activity."
    },
    date: {
        type: String,
        required: true,
        description: "Date of the activity."
    },
    volunteer_Id: {
        type: String,
        required: true,
        description: "Unique identifier for the volunteer associated with the activity."
    }
});

// Create a model based on the schema
const model = mongoose.model('activitymodels', Schema);

export default model;
