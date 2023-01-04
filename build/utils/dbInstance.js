"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var sequelize_1 = require("sequelize");
var fs_1 = __importDefault(require("fs"));
var SequelizeInstance = /** @class */ (function () {
    function SequelizeInstance() {
        dotenv_1.default.config();
        var dbName = String(process.env.DB);
        var dbUser = String(process.env.DBUSER);
        var dbPasswd = String(process.env.PASSWORD);
        var dbHost = String(process.env.HOST);
        var dbPort = Number(process.env.DBPORT);
        this.sqInstance = new sequelize_1.Sequelize(dbName, dbUser, dbPasswd, {
            host: dbHost,
            port: dbPort,
            dialect: "postgres",
            dialectOptions: {
                ssl: {
                    ca: fs_1.default.readFileSync(__dirname + "/ca-certificate.crt")
                }
            },
            define: {
                timestamps: true,
                // createdAt: "created_at",
                // updatedAt: "updated_at"
            },
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000,
            },
        });
    }
    return SequelizeInstance;
}());
var sequelizeInstance = new SequelizeInstance().sqInstance;
exports.default = sequelizeInstance;
