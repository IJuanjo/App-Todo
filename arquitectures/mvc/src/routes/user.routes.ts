import { Router } from 'express';
import UserController from '../controller/user/userController';

const router = Router();

const userController = new UserController();

router.get('/:id', userController.getUserById.bind(userController));

export default router;

// This file defines the routes for user-related operations.
