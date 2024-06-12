import mongoose from "mongoose";

import { PersonSchema } from './person-model.js'
export const YouthSchema = extendSchema(PersonSchema, {
    youthId: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true

    },
    sex: {
        type: String,
        required: true
    },
    race: {
        type: String,
        requried: true
    },
    occupation: {
        type: String,
        required: true
    },
    org: {
        type: String,
        required: true
    }
});
const model = mongoose.model('youth', YouthSchema);


function extendSchema(Schema, definition, options) {
    return new mongoose.Schema(
        Object.assign({}, Schema.obj, definition),
        options
    );
}

export default model;