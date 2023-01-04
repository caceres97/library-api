import { Router } from "express";
import UserController from "../controllers/user.controller";

class UserRoutes {
    public router: Router = Router();

    constructor() {
        this.loginUser();
        this.getUser();
        this.userRentals();
        this.createUser();
    }

    public loginUser = () => {
        this.router.post("/login", UserController.loginUser);
    }

    public getUser = () => {
        this.router.get("/", UserController.getUser);
    }

    public userRentals = () => {
        this.router.get("/:uid/rentals", UserController.getUserRentals);
    }

    public createUser = () => {
        this.router.post("/", UserController.createUser);
    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;