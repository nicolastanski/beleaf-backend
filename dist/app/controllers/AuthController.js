"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var Yup = _interopRequireWildcard(require("yup"));

var _auth = _interopRequireDefault(require("../../config/auth"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email(),
      password: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: "Validation fails"
      });
    }

    const {
      email,
      password
    } = req.body;
    const user = await _User.default.findOne({
      where: {
        email
      }
    });

    if (!user) {
      return res.status(401).json({
        error: "User not found"
      });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({
        error: "Password does not match"
      });
    }

    const {
      id,
      name
    } = user;
    return res.json({
      user: {
        id,
        name,
        email
      },
      token: _jsonwebtoken.default.sign({
        id
      }, _auth.default.secret, {
        expiresIn: _auth.default.expiresIn
      })
    });
  }

}

var _default = new AuthController();

exports.default = _default;