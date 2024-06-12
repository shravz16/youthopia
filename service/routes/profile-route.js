import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


import fs from 'fs'

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router()

router.route('/photos/:id').get((req, res) => {
    const id = req.params.id

    const imagePath = join(__dirname, 'imgs', 'pics', `${id}.jpg`);

    if (fs.existsSync(imagePath)) {
        // Stream the file to the response
        res.type('jpg')
        fs.createReadStream(imagePath).pipe(res);
    } else {
        res.status(404).send('File not found');
    }

});

export default router