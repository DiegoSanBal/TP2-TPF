import { Profesor } from "../models/index.js";

class ProfesorServices {
    getAllProfesorsServices = async () => {
        const profesors = await Profesor.findAll();
        return profesors;
    };
    getProfesorServiceById = (id) => {
        return `getProfesorServiceById ${id}`;
    };

    createProfesorServices = async (data) => {
        const { id, name } = await Profesor.create(data);
        return { id, name };
    };
}

export default ProfesorServices;