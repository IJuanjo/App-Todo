import { JSONFilePreset } from 'lowdb/node'
import { Task } from '../dto/task.dto';


interface DatabaseSchema {
    tasks: Task[];
}

const defaultData: DatabaseSchema = {
    tasks: []
};

const db = await JSONFilePreset<DatabaseSchema>('db.json', defaultData);

export default db;