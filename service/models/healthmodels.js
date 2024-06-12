import mongoose from 'mongoose';
import healthmodels from '../models/healthmodels.js'
const Schema = new mongoose.Schema({
  health_Id: {
    type: String,
    required: true
  },
  health_Issue: {
    type: String,
    required: true
  },
  youth:{
    type: Object,
    required:true
  },
  days:{
    type: Number,
    required:true
  }
     
  }
);

const model = mongoose.model('healthmodel', Schema);

export default model;