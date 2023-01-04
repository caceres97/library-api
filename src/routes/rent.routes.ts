import { Router } from "express";
import rentController from "../controllers/rent.controller";

class RentRoutes {
    public router: Router = Router();

    constructor() {
        this.getRent();
        this.getRentals();
        this.createRent();
        this.closeRent();
    }

    public getRent = () => {
        this.router.get("/:rid", rentController.getRent);
    }

    public getRentals = () => {
        this.router.get("/", rentController.getRentals);
    }

    public createRent = () => {
        this.router.post("/users/:uid/books/:bid", rentController.createRent);
    }

    public closeRent = () => {
        this.router.patch("/:rid/users/:uid/books/:bid", rentController.closeRent);
    }
}

const rentRoutes = new RentRoutes();
export default rentRoutes.router;