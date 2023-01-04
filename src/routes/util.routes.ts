import { Router } from "express";
import utilController from "../controllers/util.controller";

class UtilRoutes {
    public router: Router = Router();

    constructor() {
        this.getAuthors();
        this.getGenres();
    }

    public getAuthors = () => {
        this.router.get("/authors", utilController.getAuthors);
    }

    public getGenres = () => {
        this.router.get("/genres", utilController.getGenres);
    }
}

const utilRoutes = new UtilRoutes();
export default utilRoutes.router;