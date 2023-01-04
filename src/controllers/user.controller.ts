import { Request, Response } from "express";
import { Service } from "typedi";
import { Book } from "../models/book.model";
import { Copy } from "../models/copy.model";
import { Rental } from "../models/rent.model";
import { User } from "../models/user.model";

@Service()
class UserController {
    constructor() { }

    loginUser = async (_req: Request, res: Response) => {
        const { email, password } = _req.body;

        const loginResult = await User.findOne({
            attributes: ["id", "name", "email", "isAdmin"],
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

    getUser = async (_req: Request, res: Response) => {
        const userRequest = await User.findAll({
            attributes: ["id", "name", "email", "isAdmin"]
        });

        if (userRequest) {
            res.status(200).send(userRequest);
        } else {
            res.status(200).send({
                "message": "Error in login!",
                userRequest
            });
        }
    }

    createUser = async (_req: Request, res: Response) => {
        try {
            const { name, email, password, isAdmin } = _req.body;
            
            //Security Layer (Passw)
            const userCreation = await User.create({
                name, email, password, isAdmin
            });

            return res.status(200).send({ message: "User created!", "creationResult": userCreation });
        } catch (error) {
            res.status(500).send({ error })
        }
    }

    getUserRentals = async (_req: Request, res: Response) => {
        try {
            const { uid } = _req.params;
            const rentalsByUser = await Rental.findAll({
                attributes: ["id", "startDate", "endDate", "isActive"],
                include: [
                    {
                        model: Copy, attributes: ["id", "status"],
                        include: [{ model: Book, attributes: ["id", "name"] }]
                    }
                ],
                where: { user: uid }
            });

            return res.send(rentalsByUser)
        } catch (error) {
            res.status(500).send({ error })
        }
    }
}

const userController = new UserController()
export default userController;