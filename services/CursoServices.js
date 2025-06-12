import {Curso} from "../models/index.js"

class CursoServices {
    getAllCursosServices = async () => {
        const cursos = await Curso.findAll();
        return cursos;
    };
    getCursoServiceById = (id) => {
        return `getCursoServiceById ${id}`;
    
    }
    createCursoServices = async (data) => {
        const {id, nombre, descripcion} = await Curso.create(data);
        return { id, nombre, descripcion };
    };

}

export default CursoServices;
