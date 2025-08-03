import { Task } from "../dto/task.dto";
import { TaskRepository } from "../repositories/TaskRepository";

class TaskService {
    private taskRepository: TaskRepository;
    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }
    async getAllTasks(): Promise<Task[]> {
        return await this.taskRepository.findAll();
    }
    async getTaskById(id: string): Promise<Task | null> {
        return await this.taskRepository.findById(id);
    }
    async createTask(task: Task): Promise<Task> {
        return await this.taskRepository.create(task);
    }
    async updateTask(id: string, task: Task): Promise<Task | null> {
        return await this.taskRepository.update(id, task);
    }
    async deleteTask(id: string): Promise<Task | null> {
        return await this.taskRepository.delete(id);
    }
}

export { TaskService };