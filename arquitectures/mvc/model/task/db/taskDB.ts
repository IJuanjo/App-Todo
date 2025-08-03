import { JSONFilePreset } from 'lowdb/node'
import { Task } from '../dto/task.dto';


interface DatabaseSchema {
    tasks: Task[];
}

// Datos por defecto
const defaultData: DatabaseSchema = {
    tasks: []
};

// Crear o cargar la base de datos
const db = await JSONFilePreset<DatabaseSchema>('db.json', defaultData);

export default db;