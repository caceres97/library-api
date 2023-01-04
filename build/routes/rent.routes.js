"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var rent_controller_1 = __importDefault(require("../controllers/rent.controller"));
var RentRoutes = /** @class */ (function () {
    function RentRoutes() {
        var _this = this;
        this.router = (0, express_1.Router)();
        this.getRent = function () {
            _this.router.get("/:rid", rent_controller_1.default.getRent);
        };
        this.getRentals = function () {
            _this.router.get("/", rent_controller_1.default.getRentals);
        };
        this.createRent = function () {
            _this.router.post("/users/:uid/books/:bid", rent_controller_1.default.createRent);
        };
        this.closeRent = function () {
            _this.router.patch("/:rid/users/:uid/books/:bid", rent_controller_1.default.closeRent);
        };
        this.getRent();
        this.getRentals();
        this.createRent();
        this.closeRent();
    }
    return RentRoutes;
}());
var rentRoutes = new RentRoutes();
exports.default = rentRoutes.router;
