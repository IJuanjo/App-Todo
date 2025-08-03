import { UserService } from "../../model/user/dao/userService";

class UserServiceImpl implements UserService {
    async getUserById(id: string) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id ?? '1'}`);
        if (!response.ok) {
            return null;
        }
        const user = await response.json();
        return user;
    }
}

export default new UserServiceImpl();