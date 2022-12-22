import sequelize from "../utils/dbInstance";
import { DataTypes } from "sequelize";

interface GenreI {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
}

const Genre = sequelize.define("tbl_genres", {
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

export { GenreI, Genre }