import { JSONFilePreset } from 'lowdb/node'
import { Task } from '../task/dto/task.dto';


interface DatabaseSchema {
    tasks: Task[];
}

const defaultData: DatabaseSchema = {
    tasks: []
};

const db = await JSONFilePreset<DatabaseSchema>('src/model/database/db.json', defaultData);

export default db;