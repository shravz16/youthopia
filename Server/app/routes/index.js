import postRouter from './post-route.js';
import commentRouter from './comment-route.js';

const initializeRoutes = (app) => {
    app.use('/forums', postRouter);
    app.use('/comment', commentRouter)
}

export default initializeRoutes;