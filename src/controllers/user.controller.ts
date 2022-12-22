import { Request, Response } from "express";
import { Service } from "typedi";

@Service()
class UserController {
    constructor() { }

    createUser = async (_req: Request, res: Response) => {
        return res.json({"name": "Angel"})
    }
}

export default UserController;