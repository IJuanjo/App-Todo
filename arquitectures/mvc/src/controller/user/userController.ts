import { HttpEntity } from "@models/http/httpEntity";
import { User } from "@models/user/dto/user.interface";
import { Request, Response } from "express";
import { UserRepository } from "@models/user/repositories/UserRepository";

class UserController {
    constructor(private userRepository:UserRepository) {}
    async getUserById(req: Request, res: Response): Promise<Response<HttpEntity<User>> | void> {
        try {
            const { id } = req.params;
            const user = await this.userRepository.getUserById(id);
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