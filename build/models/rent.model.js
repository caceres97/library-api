"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rental = void 0;
var dbInstance_1 = __importDefault(require("../utils/dbInstance"));
var sequelize_1 = require("sequelize");
var user_model_1 = require("./user.model");
var copy_model_1 = require("./copy.model");
var Rental = dbInstance_1.default.define("tbl_rentals", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    user: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: user_model_1.User,
            key: "id"
        },
        field: "user_id"
    },
    book: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: copy_model_1.Copy,
            key: "id"
        },
        field: "copy_id"
    },
    startDate: {
        type: sequelize_1.DataTypes.DATE,
        field: "start_date",
        allowNull: false,
    },
    endDate: {
        type: sequelize_1.DataTypes.DATE,
        field: "end_date",
        allowNull: false,
    },
    isActive: {
        type: sequelize_1.DataTypes.BOOLEAN,
        field: "is_active",
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        field: "created_at"
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        field: "updated_at"
    }
});
exports.Rental = Rental;
Rental.hasOne(user_model_1.User, { sourceKey: "user", foreignKey: "id" });
Rental.hasOne(copy_model_1.Copy, { sourceKey: "book", foreignKey: "id" });
