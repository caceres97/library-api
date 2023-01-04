"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var typedi_1 = require("typedi");
var author_model_1 = require("../models/author.model");
var book_model_1 = require("../models/book.model");
var copy_model_1 = require("../models/copy.model");
var genre_model_1 = require("../models/genre.model");
var BookController = /** @class */ (function () {
    function BookController() {
        var _this = this;
        this.getBook = function (_req, res) { return __awaiter(_this, void 0, void 0, function () {
            var bid, bookData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        bid = _req.params.bid;
                        return [4 /*yield*/, book_model_1.Book.findByPk(bid, {
                                attributes: ["id", "name", "publicationYear", "remark"],
                                include: [
                                    { model: author_model_1.Author, attributes: ["id", "name"] },
                                    { model: genre_model_1.Genre, attributes: ["id", "name"] },
                                    { model: copy_model_1.Copy, attributes: ["id", "status"], where: { status: "A" } },
                                ]
                            })];
                    case 1:
                        bookData = _a.sent();
                        return [2 /*return*/, res.status(200).send(bookData)];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(500).send({ error: error_1 })];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getBooks = function (_req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, name, author, genre, publicationYear, available, whereQuery, pub, year, subQuery, bookData, error_2;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        _a = _req.query, name = _a.name, author = _a.author, genre = _a.genre, publicationYear = _a.publicationYear, available = _a.available;
                        whereQuery = {};
                        if (name) {
                            whereQuery["name"] = (_b = {}, _b[sequelize_1.Op.like] = "%".concat(name, "%"), _b);
                        }
                        if (author) {
                            whereQuery["author"] = author;
                        }
                        if (genre) {
                            whereQuery["genre"] = genre;
                        }
                        if (publicationYear) {
                            pub = String(publicationYear);
                            if (pub.includes(",")) {
                                year = pub.split(",");
                                whereQuery["publicationYear"] = (_c = {}, _c[sequelize_1.Op.between] = [year[0], year[1]], _c);
                            }
                            else {
                                whereQuery["publicationYear"] = publicationYear;
                            }
                        }
                        subQuery = {};
                        if (available !== "all") {
                            subQuery.status = "A";
                        }
                        return [4 /*yield*/, book_model_1.Book.findAll({
                                attributes: ["id", "name", "publicationYear", "remark"],
                                include: [
                                    { model: author_model_1.Author, attributes: ["id", "name"] },
                                    { model: genre_model_1.Genre, attributes: ["id", "name"] },
                                    { model: copy_model_1.Copy, attributes: ["id", "status"], where: subQuery }
                                ],
                                where: whereQuery
                            })];
                    case 1:
                        bookData = _d.sent();
                        return [2 /*return*/, res.status(200).send(bookData)];
                    case 2:
                        error_2 = _d.sent();
                        return [2 /*return*/, res.status(500).send({ error: error_2 })];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.createBook = function (_req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, name, publicationYear, genre, author, remark, copies, bookResult, copiesToInsert, index, copiesCreation, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        _a = _req.body, name = _a.name, publicationYear = _a.publicationYear, genre = _a.genre, author = _a.author, remark = _a.remark, copies = _a.copies;
                        if (!copies) return [3 /*break*/, 3];
                        return [4 /*yield*/, book_model_1.Book.create({ name: name, publicationYear: publicationYear, genre: genre, author: author, remark: remark })];
                    case 1:
                        bookResult = _b.sent();
                        copiesToInsert = [];
                        if (!bookResult) {
                            return [2 /*return*/, res.status(400).send({ "message": "Book wasn't created" })];
                        }
                        for (index = 0; index < copies; index++) {
                            copiesToInsert.push({ book: bookResult.dataValues.id, status: "A" });
                        }
                        return [4 /*yield*/, copy_model_1.Copy.bulkCreate(copiesToInsert)];
                    case 2:
                        copiesCreation = _b.sent();
                        return [2 /*return*/, res.status(200).send({ message: "User created!", "creationResult": bookResult, copiesCreation: copiesCreation })];
                    case 3: return [2 /*return*/, res.status(400).send({ "message": "Copies values can't be 0" })];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_3 = _b.sent();
                        res.status(500).send({ error: error_3 });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
    }
    BookController = __decorate([
        (0, typedi_1.Service)()
    ], BookController);
    return BookController;
}());
var bookController = new BookController();
exports.default = bookController;
