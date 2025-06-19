import { User } from "../models/index.js";
class UserServices {
    getAllUsersServices = async () => {
        const users = await User.findAll();
        return users;
    };
    getUserServiceById = (id) => {
        return `getUserServiceById ${id}`;
    };

    createUserServices = async (data) => {
        const { id, name } = await User.create(data);
        return { id, name };
    };
}

export default UserServices;