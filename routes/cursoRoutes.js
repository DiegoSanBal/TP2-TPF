import { Router } from "express";
import CursoControllers from "../controllers/CursoControllers.js";

const cursoControllers = new CursoControllers();
const cursoRoutes = Router();

cursoRoutes.get('/', cursoControllers.getAllCursosControllers);
cursoRoutes.get('/:id', cursoControllers.getCursoByIdControllers);
cursoRoutes.post('/', cursoControllers.createCursoControllers);
cursoRoutes.put('/:id', cursoControllers.updateCursoControllers);
cursoRoutes.delete('/:id', cursoControllers.deleteCursoControllers);

export default cursoRoutes;