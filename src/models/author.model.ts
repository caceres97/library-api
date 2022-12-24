import sequelize from "../utils/dbInstance";
import { DataTypes } from "sequelize";
import { Book } from "./book.model";

interface AuthorI {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
}

const Author = sequelize.define("tbl_authors", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        field: "created_at"
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at"
    }
});

// Author.hasMany(Book, { foreignKey: "author_id" });

export { AuthorI, Author }