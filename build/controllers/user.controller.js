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
var typedi_1 = require("typedi");
var book_model_1 = require("../models/book.model");
var copy_model_1 = require("../models/copy.model");
var rent_model_1 = require("../models/rent.model");
var user_model_1 = require("../models/user.model");
var UserController = /** @class */ (function () {
    function UserController() {
        var _this = this;
        this.loginUser = function (_req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, email, password, loginResult;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = _req.body, email = _a.email, password = _a.password;
                        return [4 /*yield*/, user_model_1.User.findOne({
                                attributes: ["id", "name", "email", "isAdmin"],
                                where: { email: email, password: password }
                            })];
                    case 1:
                        loginResult = _b.sent();
                        if (loginResult) {
                            res.status(200).send({
                                "message": "Login sucessful!",
                                loginResult: loginResult
                            });
                        }
                        else {
                            res.status(200).send({
                                "message": "Error in login!",
                                loginResult: loginResult
                            });
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.getUser = function (_req, res) { return __awaiter(_this, void 0, void 0, function () {
            var userRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_model_1.User.findAll({
                            attributes: ["id", "name", "email", "isAdmin"]
                        })];
                    case 1:
                        userRequest = _a.sent();
                        if (userRequest) {
                            res.status(200).send(userRequest);
                        }
                        else {
                            res.status(200).send({
                                "message": "Error in login!",
                                userRequest: userRequest
                            });
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.createUser = function (_req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, name, email, password, isAdmin, userCreation, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = _req.body, name = _a.name, email = _a.email, password = _a.password, isAdmin = _a.isAdmin;
                        return [4 /*yield*/, user_model_1.User.create({
                                name: name,
                                email: email,
                                password: password,
                                isAdmin: isAdmin
                            })];
                    case 1:
                        userCreation = _b.sent();
                        return [2 /*return*/, res.status(200).send({ message: "User created!", "creationResult": userCreation })];
                    case 2:
                        error_1 = _b.sent();
                        res.status(500).send({ error: error_1 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getUserRentals = function (_req, res) { return __awaiter(_this, void 0, void 0, function () {
            var uid, rentalsByUser, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        uid = _req.params.uid;
                        return [4 /*yield*/, rent_model_1.Rental.findAll({
                                attributes: ["id", "startDate", "endDate", "isActive"],
                                include: [
                                    {
                                        model: copy_model_1.Copy, attributes: ["id", "status"],
                                        include: [{ model: book_model_1.Book, attributes: ["id", "name"] }]
                                    }
                                ],
                                where: { user: uid }
                            })];
                    case 1:
                        rentalsByUser = _a.sent();
                        return [2 /*return*/, res.send(rentalsByUser)];
                    case 2:
                        error_2 = _a.sent();
                        res.status(500).send({ error: error_2 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    }
    UserController = __decorate([
        (0, typedi_1.Service)()
    ], UserController);
    return UserController;
}());
var userController = new UserController();
exports.default = userController;
