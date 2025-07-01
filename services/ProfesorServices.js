import { Profesor } from "../models/index.js";

class ProfesorServices {
    getAllProfesorsServices = async () => {
        const profesors = await Profesor.findAll();
        return profesors;
    };
    getProfesorServiceById = (id) => {
        const profesor = User.findByPk(id);
        if (!profesor) {
            throw new Error("Profesor not found")
        }
        return profesor;
    };

    createProfesorServices = async (data) => {
        const { id, name } = await Profesor.create(data);
        return { id, name };
    };

    updateProfesorServices = async (id, name) => {
        const profesor = await Profesor.findByPk(id);
        if (!profesor) throw new Error("Profesor not found");
        profesor.name = name;
        await profesor.save();

        return { id: profesor.id, name: profesor.name }
    }

    deleteProfesorServices = async (id) => {
        const profesor = await Profesor.findByPk(id);
        if (!profesor) {
            throw new Error("Profesor not found")
        }
        await profesor.destroy()
        return { message: `Profesor ${id} deleted.` }
    }
}

export default ProfesorServices; r