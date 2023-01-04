"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var book_controller_1 = __importDefault(require("../controllers/book.controller"));
var BookRoutes = /** @class */ (function () {
    function BookRoutes() {
        var _this = this;
        this.router = (0, express_1.Router)();
        this.getBook = function () {
            _this.router.get("/:bid", book_controller_1.default.getBook);
        };
        this.getBooks = function () {
            _this.router.get("/", book_controller_1.default.getBooks);
        };
        this.createBook = function () {
            _this.router.post("/", book_controller_1.default.createBook);
        };
        this.updateBook = function () {
            _this.router.put("/:bid", function () { });
        };
        this.deleteBook = function () {
            _this.router.delete("/", function () { });
        };
        this.getBook();
        this.getBooks();
        this.createBook();
        this.updateBook();
        this.deleteBook();
    }
    return BookRoutes;
}());
var bookRoutes = new BookRoutes();
exports.default = bookRoutes.router;
