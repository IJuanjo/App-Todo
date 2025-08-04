import { User } from "@models/user/dto/user.interface";

export interface UserRepository {
    getUserById(id: string): Promise<User | null>;
}