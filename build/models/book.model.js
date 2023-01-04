"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var dbInstance_1 = __importDefault(require("../utils/dbInstance"));
var sequelize_1 = require("sequelize");
var genre_model_1 = require("./genre.model");
var author_model_1 = require("./author.model");
var Book = dbInstance_1.default.define("tbl_books", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    name: sequelize_1.DataTypes.STRING,
    publicationYear: sequelize_1.DataTypes.INTEGER,
    genre: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: genre_model_1.Genre,
            key: "id"
        },
        field: "genre_id"
    },
    author: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: author_model_1.Author,
            key: "id"
        },
        field: "author_id"
    },
    remark: sequelize_1.DataTypes.STRING,
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        field: "created_at"
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        field: "updated_at"
    }
});
exports.Book = Book;
Book.hasOne(author_model_1.Author, { sourceKey: "author", foreignKey: "id" });
Book.hasOne(genre_model_1.Genre, { sourceKey: "genre", foreignKey: "id" });
