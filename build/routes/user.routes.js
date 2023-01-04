"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = __importDefault(require("../controllers/user.controller"));
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        var _this = this;
        this.router = (0, express_1.Router)();
        this.loginUser = function () {
            _this.router.post("/login", user_controller_1.default.loginUser);
        };
        this.getUser = function () {
            _this.router.get("/", user_controller_1.default.getUser);
        };
        this.userRentals = function () {
            _this.router.get("/:uid/rentals", user_controller_1.default.getUserRentals);
        };
        this.createUser = function () {
            _this.router.post("/", user_controller_1.default.createUser);
        };
        this.loginUser();
        this.getUser();
        this.userRentals();
        this.createUser();
    }
    return UserRoutes;
}());
var userRoutes = new UserRoutes();
exports.default = userRoutes.router;
