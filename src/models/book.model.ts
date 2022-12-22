import sequelize from "../utils/dbInstance";
import { DataTypes } from "sequelize";
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
    publicationYear: DataTypes.NUMBER,
    genre:  {
        type: DataTypes.INTEGER,
        references: {
            model: Genre,
            key: "id"
        },
        field: "genre_id"
    },
    author:  {
        type: DataTypes.INTEGER,
        references: {
            model: Author,
            key: "id"
        },
        field: "author_id"
    },
    remark: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
});

Book.hasMany(Copy);
Book.hasOne(Author);
Book.hasOne(Genre);

export { BookI, Book }