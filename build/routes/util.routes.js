"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var util_controller_1 = __importDefault(require("../controllers/util.controller"));
var UtilRoutes = /** @class */ (function () {
    function UtilRoutes() {
        var _this = this;
        this.router = (0, express_1.Router)();
        this.getAuthors = function () {
            _this.router.get("/authors", util_controller_1.default.getAuthors);
        };
        this.getGenres = function () {
            _this.router.get("/genres", util_controller_1.default.getGenres);
        };
        this.getAuthors();
        this.getGenres();
    }
    return UtilRoutes;
}());
var utilRoutes = new UtilRoutes();
exports.default = utilRoutes.router;
