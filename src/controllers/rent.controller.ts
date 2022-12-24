import { Request, Response } from "express";
import { Service } from "typedi";
import { User } from "../models/user.model";

@Service()
class RentController {
    constructor() { }
    
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

const rentController = new RentController()
export default rentController;