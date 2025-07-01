import UserServices from "../services/UserServices.js";

class UserControllers {
  userServices = new UserServices();

  getAllUsersControllers = async (req, res) => {
    const users = await this.userServices.getAllUsersServices();
    res.status(200).json({
      success: true,
      message: users,
    });
  };
  getUserByIdControllers = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id || isNaN(id)) {
        return res.status(400).send({
          success: false,
          message: "User ID es invalido",
        });
      }

      const user = await this.userServices.getUserServicesById(id);

      res.status(200).send({
        success: true,
        message: user,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
  createUserControllers = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await this.userServices.createUserServices({
        name,
        email,
        password,
      });
      res.status(200).send({
        success: true,
        message: user,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
  updateUserControllers = async (req, res) => {
    try {
      const { id } = req.params;
      const userData = req.body;

      const updatedUser = await this.userServices.updateUserServices(
        id,
        userData
      );
      res.status(200).send({
        success: true,
        message: "Usuari actualizado correctamente",
        data: updatedUser,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
  deleteUserController = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id || isNaN(id)) {
        return res.status(400).send({ success: false, message: "ID inválido" });
      }

      await this.userServices.deleteUserService(id);

      res.status(200).send({
        success: true,
        message: "Usuario eliminado correctamente",
      });
    } catch {
      res.status(400).send({
        success: false,
        message: "Error al eliminar el usuario",
      });
    }
  };

  login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error("Email and password are required");
      }
      const user = this;
      res.status(200).send({
        success: true,
        message: "Login successful",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  }
}

export default UserControllers;
