import { User, Curso, Profesor } from "../models/index.js";
class UserServices {
  getAllUsersServices = async () => {
    const users = await User.findAll({
      include: [
        {
          model: Curso,
          through: { attributes: [] },
          include: [
            {
              model: Profesor,
              attributes: ["id", "name", "email"],
            },
          ],
        },
      ],
    });
    return users;
  };
  getUserServicesById = async (id) => {
    const user = await User.findByPk(id, {
      include: [
        {
          model: Curso,
          through: { attributes: [] },
          include: [
            {
              model: Profesor,
              attributes: ["id", "name", "email"],
            },
          ],
        },
      ],
    });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  };

  createUserServices = async (data) => {
    const { cursos, ...userData } = data;

    const nuevoUser = await User.create(userData);
    if (cursos && Array.isArray(cursos)) {
      await nuevoUser.addCursos(cursos);
    }
    return nuevoUser;
  };

  updateUserServices = async (id, data) => {
    const { cursos, ...userData } = data;
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    await user.update(userData);

    if (Array.isArray(cursos)) {
      await user.setCursos(cursos);
    }
    return user;
  };
  deleteUserService = async (id) => {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    await user.destroy();
    return { message: "Usuario fue eliminado exitosamente." };
  };
}

export default UserServices;
