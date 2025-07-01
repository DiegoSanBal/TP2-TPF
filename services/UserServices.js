import { User } from "../models/index.js";
class UserServices {
  getAllUsersServices = async () => {
    const users = await User.findAll();
    return users;
  };
  getUserServicesById = async (id) => {
    console.log(id);
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  };

  createUserServices = async (data) => {
    const { id, name } = await User.create(data);
    return { id, name };
  };
  updateUserServices = async (id, data) => {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    await user.update(data);
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
