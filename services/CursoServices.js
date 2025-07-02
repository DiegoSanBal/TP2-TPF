import { Curso, User, Profesor } from "../models/index.js";

class CursoServices {
  getAllCursosServices = async () => {
    const cursos = await Curso.findAll({
      include: [
        {
          model: User,
          through: { attributes: [] },
          attributes: ["id", "name", "email"],
        },
        {
          model: Profesor,
          attributes: ["id", "name", "email"],
        },
      ],
    });
    return cursos;
  };
  getCursoServiceById = async (id) => {
    const curso = await Curso.findByPk(id, {
      include: [
        {
          model: User,
          through: { attributes: [] },
          attributes: ["id", "name", "email"],
        },
        {
          model: Profesor,
          attributes: ["id", "name", "email"],
        },
      ],
    });
    if (!curso) {
      throw new Error("Curso no encontrado");
    }
    return curso;
  };
  createCursoServices = async (data) => {
    const { id, nombre, descripcion } = await Curso.create(data);
    return { id, nombre, descripcion };
  };
  updateCursoServices = async (id, data) => {
    const curso = await Curso.findByPk(id);
    if (!curso) {
      throw new Error("Curso no encontrado");
    }
    await curso.update(data);
    return curso;
  };
  deleteCursoServices = async (id) => {
    const curso = await Curso.findByPk(id);
    if (!curso) {
      throw new Error("Curso no encontrado");
    }
    await curso.destroy();
    return { message: "Curso eliminado correctamente" };
  };
}

export default CursoServices;
