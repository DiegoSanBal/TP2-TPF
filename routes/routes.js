import { Router } from 'express';
import userRoutes from './userRoutes.js';
import cursoRoutes from './cursoRoutes.js'


const routes = Router();

routes.use('/users', userRoutes);
routes.use('/cursos', cursoRoutes);

export default routes;