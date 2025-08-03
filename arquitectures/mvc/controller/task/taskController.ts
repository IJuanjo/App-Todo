import taskService from "../../adapters/task/taskService";
import { Request, Response } from "express";
import { HttpEntity } from "../../model/http/httpEntity";
import { Task } from "../../model/task/dto/task.dto";

class TaskController {
    async getTaskById(req: Request, res: Response): Promise<HttpEntity<Task>> {
        const { id } = req.params;
        const task = await taskService.findById(id);
        if (!task) {
            return res.status(404).json({
                status: 404,
                message: "Task not found"
            });
        }
        return res.status(200).json({
            status: 200,
            message: "Task retrieved successfully",
            data: task
        });
    }
    async getAllTasks(_: Request, res: Response): Promise<HttpEntity<Task[]>> {
        const tasks = await taskService.findAll();
        if (tasks.length === 0) {
            return res.status(404).json({
                status: 404,
                message: "No tasks found"
            });
        }
        return res.status(200).json({
            status: 200,
            message: "Tasks retrieved successfully",
            data: tasks
        });
    }
    async createTask(req: Request, res: Response): Promise<HttpEntity<Task>> {
        const taskData: Task = req.body;
        const newTask = await taskService.create(taskData);
        return res.status(201).json({
            status: 201,
            message: "Task created successfully",
            data: newTask
        });
    }
    async updateTask(req: Request, res: Response): Promise<HttpEntity<Task>> {
        const { id } = req.params;
        const taskData: Task = req.body;
        const updatedTask = await taskService.update(id, taskData);
        if (!updatedTask) {
            return res.status(404).json({
                status: 404,
                message: "Task not found"
            });
        }
        return res.status(200).json({
            status: 200,
            message: "Task updated successfully",
            data: updatedTask
        });
    }
    async deleteTask(req: Request, res: Response): Promise<HttpEntity<void>> {
        const { id } = req.params;
        const deleted = await taskService.delete(id);
        if (!deleted) {
            return res.status(404).json({
                status: 404,
                message: "Task not found"
            });
        }
        return res.status(204).json({
            status: 204,
            message: "Task deleted successfully"
        });
    }
}

export default new TaskController();
