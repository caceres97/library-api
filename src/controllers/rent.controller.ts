import { Request, Response } from "express";
import { Service } from "typedi";
import { User } from "../models/user.model";
import { Rental } from "../models/rent.model";
import { Book } from "../models/book.model";
import moment from "moment";
import { Copy } from "../models/copy.model";

@Service()
class RentController {
    constructor() { }

    getRent = async (_req: Request, res: Response) => {
        const { rid } = _req.params
        try {
            const activeRentals = await Rental.findByPk(rid, {
                attributes: ["id", "startDate", "endDate", "isActive"],
                include: [
                    { model: User, attributes: ["id", "email"] },
                    {
                        model: Copy, attributes: ["id", "status"],
                        include: [{ model: Book, attributes: ["id", "name"] }]
                    }
                ]
            });

            return res.send(activeRentals)
        } catch (error) {
            res.status(500).send({ error })
        }
    }

    getRentals = async (_req: Request, res: Response) => {
        let whereQuery: any = {}
        const { active } = _req.query;
        if (active != undefined) {
            whereQuery = { isActive: active }
        }

        try {
            const activeRentals = await Rental.findAll({
                attributes: ["id", "startDate", "endDate", "isActive"],
                order: [["isActive", "desc"]],
                include: [
                    { model: User, attributes: ["id", "email", "name"] },
                    {
                        model: Copy, attributes: ["id", "status"],
                        include: [{ model: Book, attributes: ["id", "name"] }]
                    }
                ],
                where: whereQuery,
            });

            return res.send(activeRentals)
        } catch (error) {
            res.status(500).send({ error })
        }
    }

    createRent = async (_req: Request, res: Response) => {
        try {
            const { uid, bid } = _req.params;
            const startDate = moment()
            const endDate = moment().add(15, "days");
            //Validate if the copy is available
            const requestCopy = await Copy.findByPk(bid, { attributes: ["status"] });

            if (requestCopy?.dataValues.status !== "A") {
                return res.status(400).send({ "message": "Copy is not availabe" });
            }

            const createRent = await Rental.create({
                user: uid,
                book: bid,
                startDate,
                endDate,
                isActive: true
            });

            await Copy.update({ status: "R" }, { where: { id: bid } });

            return res.send({ "message": "Book rented", createRent })
        } catch (error) {
            res.status(500).send({ error })
        }
    }

    closeRent = async (_req: Request, res: Response) => {
        try {
            const { rid, uid, bid } = _req.params;
            const closeRent = await Rental.update(
                { isActive: false }, {
                where: {
                    book: bid,
                    user: uid,
                    id: rid
                }
            });

            //Change the copy status
            await Copy.update({ status: "A" }, { where: { id: bid } });

            return res.send({ "message": "Rent was closed", closeRent });
        } catch (error) {
            res.status(500).send({ error })
        }
    }
}

const rentController = new RentController()
export default rentController;