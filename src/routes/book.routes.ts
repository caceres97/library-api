import { Router } from "express";
import bookController from "../controllers/book.controller";

class BookRoutes {
    public router: Router = Router();

    constructor() {
        this.getBook();
        this.getBooks();
        this.createBook();
        this.updateBook();
        this.changeCopyStatus();
        this.deleteBook();
    }

    public getBook = () => {
        this.router.get("/:bid", bookController.getBook);
    }

    public getBooks = () => {
        this.router.get("/", bookController.getBooks);
    }

    public createBook = () => {
        this.router.post("/", bookController.createBook);
    }

    public updateBook = () => {
        this.router.put("/:bid", () => { });
    }

    public changeCopyStatus = () => {
        this.router.patch("/:bid/copy/:cid/status", () => { });
    }

    public deleteBook = () => {
        this.router.delete("/", () => { });
    }
}

const bookRoutes = new BookRoutes();
export default bookRoutes.router;