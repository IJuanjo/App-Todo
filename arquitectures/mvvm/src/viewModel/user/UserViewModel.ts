import { HttpEntity } from "@models/http/httpEntity";
import { User } from "@models/user/dto/user.interface";
import { UserRepository } from "@models/user/repositories/UserRepository";
import { Request, Response } from "express";

class UserViewModel {
    constructor(private userRepository: UserRepository, private user: User) { }

    getFullName(): string {
        return `${this.user.name} ${this.user.username}`;
    }

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
            this.user = user;
            return res.status(200).json({
                status: 200,
                message: "User retrieved successfully",
                data: {
                    fullName: this.getFullName(),
                }
            });
        } catch (error) {
            console.error('Error in getTaskById:', error);
            res.status(500).json({
                status: 500,
                message: "Internal server error"
            });
        }
    }

    updateName(req: Request, res: Response): void {
        const { newName } = req.body;
        this.user.name = newName;
        res.status(200).json({
            status: 200,
            message: "User name updated successfully",
            data: {
                fullName: this.getFullName()
            }
        });
    }
}

export default UserViewModel;