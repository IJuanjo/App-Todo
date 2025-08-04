import { Router } from 'express';
import TaskController from '@controllers/task/taskController';

const router = Router();

const taskController = new TaskController();

router.get('/:id', taskController.getTaskById.bind(taskController));
router.get('/', taskController.getAllTasks.bind(taskController));
router.post('/', taskController.createTask.bind(taskController));
router.put('/:id', taskController.updateTask.bind(taskController));
router.delete('/:id', taskController.deleteTask.bind(taskController));

export default router;

// This file defines the routes for task-related operations, including getting, creating, updating, and deleting tasks.