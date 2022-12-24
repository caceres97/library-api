import { Request, Response } from "express";
import { Service } from "typedi";
import { Author } from "../models/author.model";
import { Book } from "../models/book.model";
import { Copy } from "../models/copy.model";
import { Genre } from "../models/genre.model";

@Service()
class BookController {
    constructor() { }

    getBook = async (_req: Request, res: Response) => {
        const { bid } = _req.params;
        const bookData = await Book.findByPk(bid, {
            attributes: ["name", "publicationYear", "remark"],
            include: [
                { model: Author, attributes: ["id", "name"] },
                { model: Genre, attributes: ["id", "name"] },
                { model: Copy, attributes: ["id", "status"], where: { status: "A" } },
            ]
        });

        return res.status(200).send({ data: bookData })
    }

    getBooks = async (_req: Request, res: Response) => {

    }

    createBook = async (_req: Request, res: Response) => {
        try {
            const { name, publicationYear, genre, author, remark, copies } = _req.body;

            if (copies) {
                const bookResult = await Book.create({ name, publicationYear, genre, author, remark });
                const copiesToInsert = [];

                if (!bookResult) {
                    return res.status(400).send({ "message": "Book wasn't created" })
                }

                for (let index = 0; index < copies; index++) {
                    copiesToInsert.push({ book: bookResult.dataValues.id, status: "A" })
                }

                const copiesCreation = await Copy.bulkCreate(copiesToInsert);

                return res.status(200).send({ message: "User created!", "creationResult": bookResult, copiesCreation });
            } else {
                return res.status(400).send({ "message": "Copies values can't be 0" })
            }
        } catch (error) {
            res.status(500).send({ error })
        }
    }
}

const bookController = new BookController()
export default bookController;