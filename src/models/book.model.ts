import sequelize from "../utils/dbInstance";
import { DataTypes, Model } from "sequelize";
import { Copy } from "./copy.model";
import { Genre } from "./genre.model";
import { Author } from "./author.model";

interface BookI {
    id: string
    name: string
    publicationYear: number
    genre: { name: string }
    author: { name: string }
    remark: string
    createdAt: Date
    updatedAt: Date
}

const Book = sequelize.define("tbl_books", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    publicationYear: DataTypes.INTEGER,
    genre: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Genre,
            key: "id"
        },
        field: "genre_id"
    },
    author: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Author,
            key: "id"
        },
        field: "author_id"
    },
    remark: DataTypes.STRING,
    createdAt: {
        type: DataTypes.DATE,
        field: "created_at"
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at"
    }
});

Book.hasOne(Author, { sourceKey: "author", foreignKey: "id" });
Book.hasOne(Genre, { sourceKey: "genre", foreignKey: "id" });

export { BookI, Book }