import { Router } from 'express';
import UserController from '@controllers/user/userController';
import UserRepositoryImpl from '@models/user/repositories/UserRepositoryImpl';

const router = Router();

const userController = new UserController(UserRepositoryImpl);

router.get('/:id', userController.getUserById.bind(userController));

export default router;

// This file defines the routes for user-related operations.
