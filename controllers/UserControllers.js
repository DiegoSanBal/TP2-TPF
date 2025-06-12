import UserServices from '../services/UserServices.js';

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
        const { id } = req.params;
        const user = this.userServices.getUserServicesById(id);
        res.status(200).send({
            success: true,
            message: user,
        });
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
    updateUserControllers(req, res) {
        res.status(200).send("updateUserControllers");
    }
    deleteUserController(req, res) {
        res.status(200).send("deleteUserController");
    }
}

export default UserControllers;