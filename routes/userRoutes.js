import { Router } from "express";
import UserControllers from "../controllers/UserControllers.js";

const userControllers = new UserControllers();
const userRoutes = Router();

userRoutes.get("/", userControllers.getAllUsersControllers);
userRoutes.get("/:id", userControllers.getUserByIdControllers);
userRoutes.post("/", userControllers.createUserControllers);
userRoutes.put("/:id", userControllers.updateUserControllers);
userRoutes.delete("/:id", userControllers.deleteUserController);

export default userRoutes;
