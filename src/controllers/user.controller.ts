import { Request, Response } from "express";
import { Service } from "typedi";
import { User } from "../models/user.model";

@Service()
class UserController {
    constructor() { }

    loginUser = async (_req: Request, res: Response) => {
        const { email, password } = _req.body;

        const loginResult = await User.findOne({
            where: { email, password }
        });

        if (loginResult) {
            res.status(200).send({
                "message": "Login sucessful!",
                loginResult
            });
        } else {
            res.status(200).send({
                "message": "Error in login!",
                loginResult
            });
        }
    }

    createUser = async (_req: Request, res: Response) => {
        try {
            const { name, email, password } = _req.body;
            let isAdmin = false;

            //Auth condition flag
            if (false) {
                isAdmin = true;
            }

            //Security Layer (Passw)
            const userCreation = await User.create({
                name, email, password, isAdmin
            });

            return res.status(200).send({ message: "User created!", "creationResult": userCreation });
        } catch (error) {
            res.status(500).send({ error })
        }

    }
}

const userController = new UserController()
export default userController;