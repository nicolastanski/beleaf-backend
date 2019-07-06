"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _Lunch = _interopRequireDefault(require("../app/models/Lunch"));

var _User = _interopRequireDefault(require("../app/models/User"));

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var models = [_Lunch["default"], _User["default"]];

var Database =
/*#__PURE__*/
function () {
  function Database() {
    _classCallCheck(this, Database);

    this.init();
  }

  _createClass(Database, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.connection = new _sequelize["default"](_database["default"]);
      models.map(function (model) {
        return model.init(_this.connection);
      });
    }
  }]);

  return Database;
}();

var _default = new Database();

exports["default"] = _default;