import youthRouter from "./youth-route.js";
import volunteerRouter from "./volunteer-route.js";
import profileRouter from "./profile-route.js";
import fundingRouter from './funding-route.js';
import offeringRouter from './offering-route.js';
import postRouter from './post-route.js';
import commentRouter from './comment-route.js';
import healthroutes from './health-routes.js';
import newsroutes from './news-routes.js';
import skillsroutes from './skills-routes.js';
import activitymodelsroutes from './activity-model-routes.js'
import campmodelsroutes from './camp-model-routes.js'

import multer from "multer";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


import fs from 'fs'

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);
multer({
    limits: { fieldSize: 25 * 8192 * 8192 }
})
const init = (app) => {
    app.use('/accounts', youthRouter);
    app.use('/accounts', volunteerRouter);
    app.use('/profile', profileRouter);
    app.use('/donations', fundingRouter);
    app.use('/donations', offeringRouter);
    app.use('/forums', postRouter);
    app.use('/healthmodel', healthroutes);
    app.use('/newsmodel', newsroutes);
    app.use('/skillsmodel', skillsroutes);
    app.use('/comment', commentRouter)
        // Mount activity models routes under '/activitymodels'
    app.use('/activitymodels', activitymodelsroutes);

    // Mount camp models routes under '/campmodels'
    app.use('/campmodels', campmodelsroutes);
    img(app)

}
const img = (app) => {
    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            console.log("sss")
            return cb(null, 'imgs/pics');
        },
        filename: function(req, file, cb) {
            const id = req.params.id
            return cb(null, `${req.params.id}${path.extname(file.originalname)}`)
        }
    })
    const upload = multer({ storage })

    app.post('/upload-pics/:id', upload.single('file'), async(req, res) => {

        const id = req.params.id;
        const base64Data = req.body.file;
        const base64Image = base64Data.replace(/^data:image\/jpeg;base64,/, '');
        console.log(base64Image)
        const imagePath = join(__dirname, 'imgs', 'pics', `${id}.jpg`);

        fs.writeFile(imagePath, base64Image, 'base64', (err) => {
            if (err) {
                console.error('Error saving image:', err);
                return res.status(500).send('Error saving image');
            }
            console.log('Image saved successfully');
            res.send('Image uploaded successfully');
        });
    })
}

export default init;