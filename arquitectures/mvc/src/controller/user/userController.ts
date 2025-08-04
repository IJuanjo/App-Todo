import { UserService } from "@models/user/services/UserService";
import { HttpEntity } from "@models/http/httpEntity";
import { User } from "@models/user/dto/user.interface";
import { Request, Response } from "express";
import UserRepositoryImpl from "@models/user/repositories/UserRepositoryImpl";

class UserController {
    userService: UserService;
    constructor() {
        this.userService = new UserService(UserRepositoryImpl);
    }
    async getUserById(req: Request, res: Response): Promise<Response<HttpEntity<User>> | void> {
        try {
            const { id } = req.params;
            const user = await this.userService.getUserById(id);
            if (!user) {
                return res.status(404).json({
                    status: 404,
                    message: "User not found"
                });
            }
            return res.status(200).json({
                status: 200,
                message: "User retrieved successfully",
                data: user
            });
        } catch (error) {
            console.error('Error in getTaskById:', error);
            res.status(500).json({
                status: 500,
                message: "Internal server error"
            });
        }
    }
}

export default UserController;