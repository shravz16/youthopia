import mongoose from 'mongoose';
import newsmodels from '../models/newsmodel.js'


const newsmodelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    Id: {
        type: String,
        required: true
      }
  
  });

const newsmodel = mongoose.model('newsmodel', newsmodelSchema);

export default newsmodel;