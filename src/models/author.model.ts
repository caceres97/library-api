import sequelize from "../utils/dbInstance";
import { DataTypes } from "sequelize";

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
    name: DataTypes.STRING,
    createdAt: {
        type: DataTypes.DATE,
        field: "created_at"
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at"
    }
});

export { AuthorI, Author }