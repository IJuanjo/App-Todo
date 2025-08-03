import { HttpEntity } from "../model/http/httpEntity";
import { User } from "../model/user/dto/user.interface";
import userService from "../services/user/userService";
import { Request, Response } from "express";

class UserController{
    async getUserById(req: Request, res: Response): Promise<HttpEntity<User>> {
        const { id } = req.params;
        const user = await userService.getUserById(id);
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
    }
}

export default new UserController();