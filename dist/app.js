"use strict";

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _routes2 = _interopRequireDefault(require("./routes"));

var _cors = _interopRequireDefault(require("cors"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.server = (0, _express["default"])();
    this.middlewares();
    this.routes();
  }

  _createClass(App, [{
    key: "middlewares",
    value: function middlewares() {
      this.server.use(_express["default"].json());
      this.server.use((0, _cors["default"])());
    }
  }, {
    key: "routes",
    value: function routes() {
      this.server.use(_routes2["default"]);
    }
  }]);

  return App;
}();

module.exports = new App().server;