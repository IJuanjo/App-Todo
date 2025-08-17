import { User } from "../entities/user.entity";


export interface UserRepository {
    getUserById(id: string): Promise<User | null>;
}