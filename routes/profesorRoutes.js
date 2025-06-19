import { Router } from 'express';
import ProfesorControllers from '../controllers/ProfesorControllers.js';

const profesorControllers = new ProfesorControllers();
const profesorRoutes = Router();

profesorRoutes.get('/', profesorControllers.getAllProfesorsControllers);
profesorRoutes.get('/:id', profesorControllers.getProfesorByIdControllers);
profesorRoutes.post('/', profesorControllers.createProfesorControllers);
profesorRoutes.put('/:id', profesorControllers.updateProfesorControllers);
profesorRoutes.delete('/:id', profesorControllers.deleteProfesorController);

export default profesorRoutes;