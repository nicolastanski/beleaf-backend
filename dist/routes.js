"use strict";

var _express = require("express");

var _LunchController = _interopRequireDefault(require("./app/controllers/LunchController"));

var _auth = _interopRequireDefault(require("./app/middlewares/auth"));

var _UserController = _interopRequireDefault(require("./app/controllers/UserController"));

var _AuthController = _interopRequireDefault(require("./app/controllers/AuthController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = new _express.Router();
routes.post("/auth", _AuthController["default"].store);
routes.post("/users", _UserController["default"].store);
routes.get("/lunches", _LunchController["default"].index);
routes.get("/lunches/:id", _LunchController["default"].show);
routes.use(_auth["default"]);
routes.post("/lunches", _LunchController["default"].store);
routes.put("/lunches/:id", _LunchController["default"].update);
routes["delete"]("/lunches/:id", _LunchController["default"]["delete"]);
module.exports = routes;