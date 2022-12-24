import { Router } from "express";

class RentRoutes {
    public router: Router = Router();

    constructor() {
        this.getRent();
        this.getRentas();
        this.createRent();
        this.closeRent();
    }

    public getRent = () => {
        this.router.get("/", () => {});
    }

    public getRentas = () => {
        this.router.get("/", () => {});
    }

    public createRent = () => {
        this.router.post("/users/:uid/book/:bid", () => {});
    }

    public closeRent = () => {
        this.router.patch("/:rid/users/:uid/book/:bid", () => {});
    }
}

const rentRoutes = new RentRoutes();
export default rentRoutes.router;