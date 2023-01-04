"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var dbInstance_1 = __importDefault(require("../utils/dbInstance"));
var sequelize_1 = require("sequelize");
var User = dbInstance_1.default.define("tbl_users", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: sequelize_1.DataTypes.BOOLEAN,
        field: "is_admin",
        allowNull: false,
        defaultValue: false
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
exports.User = User;
