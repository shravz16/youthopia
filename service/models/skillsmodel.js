import mongoose from 'mongoose';
import skillsmodels from '../models/skillsmodel.js'

const Schema = new mongoose.Schema({
  SkillId: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    
    youth:{
      type: Object,
      required:true
    }

  
  });

const model = mongoose.model('skillsmodel', Schema);

export default model;