import sequelize from "../utils/dbInstance";
import { DataTypes } from "sequelize";
import { Book } from "./book.model";
import { User } from "./user.model";

interface RentalI {
    id: string
    name: string
    publicationYear: number
    genre: { name: string }
    author: { name: string }
    remark: string
    createdAt: Date
    updatedAt: Date
}

const Rental = sequelize.define("tbl_rentals", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: "id"
        },
        field: "user_id"
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
    startDate: {
        type: DataTypes.DATE,
        field: "start_date",
        allowNull: false,
    },
    endDate: {
        type: DataTypes.DATE,
        field: "end_date",
        allowNull: false,
    },
    isActive:  {
        type: DataTypes.BOOLEAN,
        field: "is_active",
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

Rental.hasOne(User, { foreignKey: "user_id" });
Rental.hasOne(Book, { foreignKey: "book_id" });

export { RentalI, Rental }