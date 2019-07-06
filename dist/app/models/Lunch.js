"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireWildcard(require("sequelize"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Lunch extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: _sequelize.default.STRING,
      description: _sequelize.default.TEXT,
      price: _sequelize.default.DECIMAL,
      ingredients: _sequelize.default.TEXT,
      amount: _sequelize.default.INTEGER,
      url: _sequelize.default.STRING,
      percentage: _sequelize.default.INTEGER
    }, {
      sequelize
    });
    return this;
  }

}

var _default = Lunch;
exports.default = _default;