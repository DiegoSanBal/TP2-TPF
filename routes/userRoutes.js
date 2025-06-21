import { Router } from 'express';
import UserControllers from '../controllers/UserControllers.js';

const userControllers = new UserControllers();
const userRoutes = Router();

userRoutes.post('/', userControllers.createUserControllers);
userRoutes.post('/login', userControllers.login);
userRoutes.get('/me',userControllers.me);

userRoutes.get('/', userControllers.getAllUsersControllers);
userRoutes.get('/:id', userControllers.getUserByIdControllers);
userRoutes.put('/:id', userControllers.updateUserControllers);
userRoutes.delete('/:id', userControllers.deleteUserController);

export default userRoutes;