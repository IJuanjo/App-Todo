import { Task } from "../dto/task.dto";

export interface TaskRepository {
    findAll(): Promise<Task[]>;
    findById(id: string): Promise<Task | null>;
    create(task: Task): Promise<Task>;
    update(id: string, task: Task): Promise<Task | null>;
    delete(id: string): Promise<Task>;
}