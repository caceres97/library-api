import sequelize from "../utils/dbInstance";
import { DataTypes } from "sequelize";

interface UserI {
    id: string
    name: string
    email: string
    password: string
    books?: []
    isAdmin: boolean
    createdAt: Date
    updatedAt: Date
}

const User = sequelize.define("tbl_users", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: {
        type: DataTypes.BOOLEAN,
        field: "is_admin"
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

export { UserI, User }