import express from 'express';
import auth from './auth/index.js';
import subscribe from './subscribe/index.js';
import post from './post/index.js';
import like from './like/index.js';
import comment from './comment/index.js';
import replyComment from './replyComment/index.js';
import alert from './alert/index.js';

const routes = express.Router();

routes.use('/auth', auth);
routes.use('/post', post);
routes.use('/subscribe', subscribe);
routes.use('/like', like)
routes.use('/comment', comment);
routes.use('/replyComment', replyComment);
routes.use('/alert', alert);

export default routes;