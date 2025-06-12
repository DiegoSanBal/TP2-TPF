import { Router } from 'express';
import userRoutes from './userRoutes.js';
import cursoRoutes from './cursoRoutes.js'
import profesorRoutes from './profesorRoutes.js';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/cursos', cursoRoutes);
routes.use('/profesor',profesorRoutes)

export default routes;