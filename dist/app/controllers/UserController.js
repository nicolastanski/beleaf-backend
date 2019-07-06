"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var Yup = _interopRequireWildcard(require("yup"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: "store",
    value: function () {
      var _store = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var schema, userExists, _ref, name, email;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                schema = Yup.object().shape({
                  name: Yup.string().required(),
                  email: Yup.string().email().required(),
                  password: Yup.string().required().min(6)
                });
                _context.next = 3;
                return schema.isValid(req.body);

              case 3:
                if (_context.sent) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", res.status(400).json({
                  error: "Validation fails"
                }));

              case 5:
                _context.next = 7;
                return _User["default"].findOne({
                  where: {
                    email: req.body.email
                  }
                });

              case 7:
                userExists = _context.sent;

                if (!userExists) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", res.status(400).json({
                  error: "User already exists"
                }));

              case 10:
                _context.next = 12;
                return _User["default"].create(req.body);

              case 12:
                _ref = _context.sent;
                name = _ref.name;
                email = _ref.email;
                return _context.abrupt("return", res.json({
                  name: name,
                  email: email
                }));

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function store(_x, _x2) {
        return _store.apply(this, arguments);
      }

      return store;
    }()
  }]);

  return UserController;
}();

var _default = new UserController();

exports["default"] = _default;