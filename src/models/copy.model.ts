import sequelize from "../utils/dbInstance";
import { DataTypes } from "sequelize";
import { Book } from "./book.model";

interface CopyI {
    id: string
    bookId: number
    status: string
    createdAt: Date
    updatedAt: Date
}

const Copy = sequelize.define("tbl_copies", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    book: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Book,
            key: "id"
        },
        field: "book_id"
    },
    status: DataTypes.CHAR(1),
    createdAt: {
        type: DataTypes.DATE,
        field: "created_at"
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at"
    }
});

export { CopyI, Copy }