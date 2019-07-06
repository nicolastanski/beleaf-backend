"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _Lunch = _interopRequireDefault(require("../app/models/Lunch"));

var _User = _interopRequireDefault(require("../app/models/User"));

var _database = _interopRequireDefault(require("../config/database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const models = [_Lunch.default, _User.default];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new _sequelize.default(_database.default);
    models.map(model => model.init(this.connection));
  }

}

var _default = new Database();

exports.default = _default;