import express from 'express';
import auth from './auth/index.js';
import post from './post/index.js';
const routes = express.Router();
routes.use('/auth', auth);
routes.use('/post', post);
export default routes;