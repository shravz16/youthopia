import mongoose from "mongoose";

import { PersonSchema } from './person-model.js'
export const VolunteerSchema = extendSchema(PersonSchema, {
    volunteerId: {
        type: String,
        required: true
    }
});
const model = mongoose.model('volunteer', VolunteerSchema);

function extendSchema(Schema, definition, options) {
    return new mongoose.Schema(
        Object.assign({}, Schema.obj, definition),
        options
    );
}

export default model;