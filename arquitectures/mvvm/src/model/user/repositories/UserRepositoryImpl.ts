import { UserRepository } from "./UserRepository";

class UserRepositoryImpl implements UserRepository {
    async getUserById(id: string) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id ?? '1'}`);
        if (!response.ok) {
            return null;
        }
        const user = await response.json();
        return user;
    }
}
export { UserRepositoryImpl };
export default new UserRepositoryImpl();