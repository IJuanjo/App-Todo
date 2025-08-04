import { Task } from "../dto/task.dto";
import { TaskRepository } from "./TaskRepository";
import db from '@database/taskDB';


class TaskRepositoryImpl implements TaskRepository {
    async delete(id: string): Promise<Task> {
        await db.read();
        const task = db.data.tasks.find(task => task.id === id);
        if (!task) throw new Error('Task not found');
        db.data.tasks = db.data.tasks.filter(task => task.id !== id);
        await db.write();
        return task;
    }
    async create(task: Task): Promise<Task> {
        await db.read();
        db.data.tasks.push(task);
        await db.write();
        return task;
    }
    async update(id: string, task: Task): Promise<Task | null> {
        await db.read();
        const index = db.data.tasks.findIndex(t => t.id === id);
        if (index === -1) return null;
        db.data.tasks[index] = task;
        await db.write();
        return task;
    }
    async findAll(): Promise<Task[]> {
        await db.read();
        return db.data.tasks;
    }
    async findById(id: string): Promise<Task | null> {
        await db.read();
        const task = db.data.tasks.find(task => task.id === id);
        return task || null;
    }
}
export { TaskRepositoryImpl };
export default new TaskRepositoryImpl();