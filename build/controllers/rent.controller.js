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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typedi_1 = require("typedi");
var user_model_1 = require("../models/user.model");
var rent_model_1 = require("../models/rent.model");
var book_model_1 = require("../models/book.model");
var moment_1 = __importDefault(require("moment"));
var copy_model_1 = require("../models/copy.model");
var RentController = /** @class */ (function () {
    function RentController() {
        var _this = this;
        this.getRent = function (_req, res) { return __awaiter(_this, void 0, void 0, function () {
            var rid, activeRentals, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rid = _req.params.rid;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, rent_model_1.Rental.findByPk(rid, {
                                attributes: ["id", "startDate", "endDate", "isActive"],
                                include: [
                                    { model: user_model_1.User, attributes: ["id", "email"] },
                                    {
                                        model: copy_model_1.Copy, attributes: ["id", "status"],
                                        include: [{ model: book_model_1.Book, attributes: ["id", "name"] }]
                                    }
                                ]
                            })];
                    case 2:
                        activeRentals = _a.sent();
                        return [2 /*return*/, res.send(activeRentals)];
                    case 3:
                        error_1 = _a.sent();
                        res.status(500).send({ error: error_1 });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getRentals = function (_req, res) { return __awaiter(_this, void 0, void 0, function () {
            var whereQuery, active, activeRentals, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        whereQuery = {};
                        active = _req.query.active;
                        if (active != undefined) {
                            whereQuery = { isActive: active };
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, rent_model_1.Rental.findAll({
                                attributes: ["id", "startDate", "endDate", "isActive"],
                                order: [["isActive", "desc"]],
                                include: [
                                    { model: user_model_1.User, attributes: ["id", "email", "name"] },
                                    {
                                        model: copy_model_1.Copy, attributes: ["id", "status"],
                                        include: [{ model: book_model_1.Book, attributes: ["id", "name"] }]
                                    }
                                ],
                                where: whereQuery,
                            })];
                    case 2:
                        activeRentals = _a.sent();
                        return [2 /*return*/, res.send(activeRentals)];
                    case 3:
                        error_2 = _a.sent();
                        res.status(500).send({ error: error_2 });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.createRent = function (_req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, uid, bid, startDate, endDate, requestCopy, createRent, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        _a = _req.params, uid = _a.uid, bid = _a.bid;
                        startDate = (0, moment_1.default)();
                        endDate = (0, moment_1.default)().add(15, "days");
                        return [4 /*yield*/, copy_model_1.Copy.findByPk(bid, { attributes: ["status"] })];
                    case 1:
                        requestCopy = _b.sent();
                        if ((requestCopy === null || requestCopy === void 0 ? void 0 : requestCopy.dataValues.status) !== "A") {
                            return [2 /*return*/, res.status(400).send({ "message": "Copy is not availabe" })];
                        }
                        return [4 /*yield*/, rent_model_1.Rental.create({
                                user: uid,
                                book: bid,
                                startDate: startDate,
                                endDate: endDate,
                                isActive: true
                            })];
                    case 2:
                        createRent = _b.sent();
                        return [4 /*yield*/, copy_model_1.Copy.update({ status: "R" }, { where: { id: bid } })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, res.send({ "message": "Book rented", createRent: createRent })];
                    case 4:
                        error_3 = _b.sent();
                        res.status(500).send({ error: error_3 });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.closeRent = function (_req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, rid, uid, bid, closeRent, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = _req.params, rid = _a.rid, uid = _a.uid, bid = _a.bid;
                        return [4 /*yield*/, rent_model_1.Rental.update({ isActive: false }, {
                                where: {
                                    book: bid,
                                    user: uid,
                                    id: rid
                                }
                            })];
                    case 1:
                        closeRent = _b.sent();
                        //Change the copy status
                        return [4 /*yield*/, copy_model_1.Copy.update({ status: "A" }, { where: { id: bid } })];
                    case 2:
                        //Change the copy status
                        _b.sent();
                        return [2 /*return*/, res.send({ "message": "Rent was closed", closeRent: closeRent })];
                    case 3:
                        error_4 = _b.sent();
                        res.status(500).send({ error: error_4 });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
    }
    RentController = __decorate([
        (0, typedi_1.Service)()
    ], RentController);
    return RentController;
}());
var rentController = new RentController();
exports.default = rentController;
