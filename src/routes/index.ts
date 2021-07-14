import { Router } from 'express';
import homeRouter from './home';

const routes = Router();

routes.use('/', homeRouter);

export default routes;