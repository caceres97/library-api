import { Request, Response } from "express";
import { Service } from "typedi";
import { Author } from "../models/author.model";
import { Genre } from "../models/genre.model";

@Service()
class UtilController {
    constructor() { }

    getAuthors = async (_req: Request, res: Response) => {
        try {
            const getAuthors = await Author.findAll();
            return res.send(getAuthors);
        } catch (error) {
            res.status(500).send({ error })
        }
    }

    getGenres = async (_req: Request, res: Response) => {
        try {
            const getGenres = await Genre.findAll();
            return res.send(getGenres);
        } catch (error) {
            res.status(500).send({ error })
        }
    }
}

const utilController = new UtilController()
export default utilController;