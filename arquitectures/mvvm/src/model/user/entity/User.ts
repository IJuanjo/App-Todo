import { User } from "../dto/user.interface";

export class UserEntity {
    user: User
    constructor(
        user: User
    ) {
        this.user = user;
    }
    // Additional methods or properties can be added here as needed
}