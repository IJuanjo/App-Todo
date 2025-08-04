import { UserRepository } from '@models/user/repositories/UserRepository';
import { User } from '@models/user/dto/user.interface';
class UserService {
    private userRepository: UserRepository;
    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }
    async getUserById(id: string): Promise<User | null> {
        return await this.userRepository.getUserById(id);
    }
}

export { UserService };