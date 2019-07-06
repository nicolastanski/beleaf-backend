"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Lunch = _interopRequireDefault(require("../models/Lunch"));

var Yup = _interopRequireWildcard(require("yup"));

var _sequelize = require("sequelize");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LunchController =
/*#__PURE__*/
function () {
  function LunchController() {
    _classCallCheck(this, LunchController);
  }

  _createClass(LunchController, [{
    key: "index",
    value: function () {
      var _index = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var _req$query, _req$query$page, page, _req$query$order, order, totalPages, lunches;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _req$query = req.query, _req$query$page = _req$query.page, page = _req$query$page === void 0 ? 1 : _req$query$page, _req$query$order = _req$query.order, order = _req$query$order === void 0 ? "desc" : _req$query$order;
                _context.next = 3;
                return _Lunch["default"].count();

              case 3:
                totalPages = _context.sent;
                _context.next = 6;
                return _Lunch["default"].findAll({
                  where: {
                    amount: _defineProperty({}, _sequelize.Op.gt, 0)
                  },
                  order: [["id", order]],
                  limit: 5,
                  offset: (page - 1) * 5
                });

              case 6:
                lunches = _context.sent;

                if (lunches) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", res.json({
                  error: "Failure to list lunches"
                }));

              case 9:
                return _context.abrupt("return", res.json({
                  lunches: lunches,
                  page: page,
                  total_pages: Math.ceil(totalPages / 5)
                }));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function index(_x, _x2) {
        return _index.apply(this, arguments);
      }

      return index;
    }()
  }, {
    key: "store",
    value: function () {
      var _store = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(req, res) {
        var schema, lunch;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                schema = Yup.object().shape({
                  name: Yup.string().min(2).required(),
                  description: Yup.string().required(),
                  price: Yup.number().required().positive(),
                  ingredients: Yup.string().required(),
                  amount: Yup.number().required().positive().integer(),
                  url: Yup.string().required(),
                  percentage: Yup.number().required()
                });
                _context2.next = 3;
                return schema.isValid(req.body);

              case 3:
                if (_context2.sent) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", res.status(400).json({
                  error: "Required Fields"
                }));

              case 5:
                _context2.next = 7;
                return _Lunch["default"].create(req.body);

              case 7:
                lunch = _context2.sent;
                return _context2.abrupt("return", res.json(lunch));

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function store(_x3, _x4) {
        return _store.apply(this, arguments);
      }

      return store;
    }()
  }, {
    key: "show",
    value: function () {
      var _show = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(req, res) {
        var lunch;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _Lunch["default"].findByPk(req.params.id);

              case 2:
                lunch = _context3.sent;

                if (lunch) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", res.json({
                  error: "Lunch not found"
                }));

              case 5:
                return _context3.abrupt("return", res.json(lunch));

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function show(_x5, _x6) {
        return _show.apply(this, arguments);
      }

      return show;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(req, res) {
        var schema, lunch;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                schema = Yup.object().shape({
                  name: Yup.string().min(2).required(),
                  description: Yup.string().required(),
                  price: Yup.number().required().positive(),
                  ingredients: Yup.string().required(),
                  amount: Yup.number().required().positive().integer(),
                  url: Yup.string().required(),
                  percentage: Yup.number().required()
                });
                _context4.next = 3;
                return schema.isValid(req.body);

              case 3:
                if (_context4.sent) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return", res.status(400).json({
                  error: "Required Fields"
                }));

              case 5:
                _context4.next = 7;
                return _Lunch["default"].findByPk(req.params.id);

              case 7:
                lunch = _context4.sent;

                if (lunch) {
                  _context4.next = 10;
                  break;
                }

                return _context4.abrupt("return", res.status(400).json({
                  error: "Lunch not found"
                }));

              case 10:
                _context4.next = 12;
                return lunch.update(req.body);

              case 12:
                return _context4.abrupt("return", res.json(lunch));

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function update(_x7, _x8) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(req, res) {
        var lunch;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _Lunch["default"].findOne({
                  where: {
                    id: req.params.id
                  }
                });

              case 2:
                lunch = _context5.sent;
                lunch.destroy();
                return _context5.abrupt("return", res.json({}));

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function _delete(_x9, _x10) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);

  return LunchController;
}();

var _default = new LunchController();

exports["default"] = _default;