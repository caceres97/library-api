import { Router } from "express";
import UserController from "../controllers/user.controller";

class UserRoutes {
    public router: Router = Router();

    constructor() {
        this.createUser();
        this.loginUser();
    }

    public loginUser = () => {
        this.router.post("/login", UserController.loginUser);
    }

    public createUser = () => {
        this.router.post("/", UserController.createUser);
    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;