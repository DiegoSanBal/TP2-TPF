import { Profesor, Curso } from "../models/index.js";

class ProfesorServices {
  getAllProfesorsServices = async () => {
    const profesors = await Profesor.findAll({
      include: [
        {
          model: Curso,
          attributes: ["id", "nombre", "descripcion"],
        },
      ],
    });
    return profesors;
  };
  getProfesorServicesById = (id) => {
    const profesor = Profesor.findByPk(id, {
      include: [
        {
          model: Curso,
          attributes: ["id", "nombre", "descripcion"],
        },
      ],
    });
    if (!profesor) {
      throw new Error("Profesor not found");
    }
    return profesor;
  };

  createProfesorServices = async (data) => {
    console.log(data);
    const profesor = await Profesor.create(data);
    return profesor;
  };

  updateProfesorServices = async (id, data) => {
    const profesor = await Profesor.findByPk(id);
    if (!profesor) throw new Error("Profesor not found");
    console.log(data);
    await profesor.update(data);

    return profesor;
  };

  deleteProfesorServices = async (id) => {
    const profesor = await Profesor.findByPk(id);
    if (!profesor) {
      throw new Error("Profesor not found");
    }
    await profesor.destroy();
    return { message: `Profesor ${id} deleted.` };
  };
}

export default ProfesorServices;
