import { User } from "../dto/user.interface";

export interface UserRepository {
    getUserById(id: string): Promise<User | null>;
}