"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Copy = void 0;
var dbInstance_1 = __importDefault(require("../utils/dbInstance"));
var sequelize_1 = require("sequelize");
var book_model_1 = require("./book.model");
var Copy = dbInstance_1.default.define("tbl_copies", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    book: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: book_model_1.Book,
            key: "id"
        },
        field: "book_id"
    },
    status: sequelize_1.DataTypes.CHAR(1),
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        field: "created_at"
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        field: "updated_at"
    }
});
exports.Copy = Copy;
Copy.belongsTo(book_model_1.Book, { foreignKey: "book" });
book_model_1.Book.hasMany(Copy, { sourceKey: "id", foreignKey: "book" });
