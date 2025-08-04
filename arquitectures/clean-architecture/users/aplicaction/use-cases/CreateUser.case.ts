
import { User } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class CreateUser {
    constructor(private userRepository: UserRepository) {}

    async execute(User: User): Promise<User | null> {
        return await this.userRepository.getUserById(User.id);
    }
}