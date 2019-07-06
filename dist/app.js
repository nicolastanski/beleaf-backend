"use strict";

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _cors = _interopRequireDefault(require("cors"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App {
  constructor() {
    this.server = (0, _express.default)();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(_express.default.json());
    this.server.use((0, _cors.default)());
  }

  routes() {
    this.server.use(_routes.default);
  }

}

module.exports = new App().server;