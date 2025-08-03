import { User } from "../dto/user.interface";

export interface UserService {
    getUserById(id: string): Promise<User | null>;
}