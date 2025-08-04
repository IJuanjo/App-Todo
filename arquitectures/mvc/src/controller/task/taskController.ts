import { TaskRepository } from './../../model/task/repositories/TaskRepository';
import { Request, Response } from "express";
import { HttpEntity } from "@models/http/httpEntity";
import { Task } from "@models/task/dto/task.dto";

class TaskController {
    constructor(private taskRepository: TaskRepository) {}
    async getTaskById(req: Request, res: Response): Promise<Response<HttpEntity<Task>> | void> {
        try {
            const { id } = req.params;
            const task = await this.taskRepository.findById(id);
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
        } catch (error) {
            console.error('Error in getTaskById:', error);
            res.status(500).json({
                status: 500,
                message: "Internal server error"
            });
        }
    }
    async getAllTasks(_: Request, res: Response): Promise<Response<HttpEntity<Task>> | void> {
        try {
            const tasks = await this.taskRepository.findAll();
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
        } catch (error) {
            console.error('Error in getAllTasks:', error);
            res.status(500).json({
                status: 500,
                message: "Internal server error"
            });
        }
    }
    async createTask(req: Request, res: Response): Promise<Response<HttpEntity<Task>> | void> {
        try {
            const taskData: Task = req.body;
            const newTask = await this.taskRepository.create(taskData);
            return res.status(201).json({
                status: 201,
                message: "Task created successfully",
                data: newTask
            });
        } catch (error) {
            console.error('Error in createTask:', error);
            res.status(500).json({
                status: 500,
                message: "Internal server error"
            });
        }
    }
    async updateTask(req: Request, res: Response): Promise<Response<HttpEntity<Task>> | void> {
        try {
            const { id } = req.params;
            const taskData: Task = req.body;
            const updatedTask = await this.taskRepository.update(id, taskData);
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
        } catch (error) {
            console.error('Error in updateTask:', error);
            res.status(500).json({
                status: 500,
                message: "Internal server error"
            });
        }
    }
    async deleteTask(req: Request, res: Response): Promise<Response<HttpEntity<Task>> | void> {
        try {
            const { id } = req.params;
            const deleted = await this.taskRepository.delete(id);
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
        } catch (error) {
            console.error('Error in deleteTask:', error);
            res.status(500).json({
                status: 500,
                message: "Internal server error"
            });
        }
    }
}

export default TaskController;
