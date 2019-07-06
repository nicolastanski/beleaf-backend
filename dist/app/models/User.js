"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireWildcard(require("sequelize"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      name: _sequelize.default.STRING,
      email: _sequelize.default.STRING,
      password: _sequelize.default.VIRTUAL,
      password_hash: _sequelize.default.STRING
    }, {
      sequelize
    });
    this.addHook("beforeSave", async user => {
      if (user.password) {
        user.password_hash = await _bcryptjs.default.hash(user.password, 8);
      }
    });
    return this;
  }

  checkPassword(password) {
    return _bcryptjs.default.compare(password, this.password_hash);
  }

}

var _default = User;
exports.default = _default;