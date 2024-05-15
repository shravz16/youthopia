
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import intializeRoutes from "./routes/index.js";
import models from './models/index.js';


const initialize = (app) => {

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    mongoose.connect(process.env.MONGO_CONNECTION);
    intializeRoutes(app);

}

export default initialize;