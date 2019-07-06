"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Lunch = _interopRequireDefault(require("../models/Lunch"));

var Yup = _interopRequireWildcard(require("yup"));

var _sequelize = require("sequelize");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LunchController {
  async index(req, res) {
    const {
      page = 1,
      order = "desc"
    } = req.query;
    const totalPages = await _Lunch.default.count();
    const lunches = await _Lunch.default.findAll({
      where: {
        amount: {
          [_sequelize.Op.gt]: 0
        }
      },
      order: [["id", order]],
      limit: 5,
      offset: (page - 1) * 5
    });

    if (!lunches) {
      return res.json({
        error: "Failure to list lunches"
      });
    }

    return res.json({
      lunches,
      page,
      total_pages: Math.ceil(totalPages / 5)
    });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().min(2).required(),
      description: Yup.string().required(),
      price: Yup.number().required().positive(),
      ingredients: Yup.string().required(),
      amount: Yup.number().required().positive().integer(),
      url: Yup.string().required(),
      percentage: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: "Required Fields"
      });
    }

    const lunch = await _Lunch.default.create(req.body);
    return res.json(lunch);
  }

  async show(req, res) {
    const lunch = await _Lunch.default.findByPk(req.params.id);

    if (!lunch) {
      return res.json({
        error: "Lunch not found"
      });
    }

    return res.json(lunch);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().min(2).required(),
      description: Yup.string().required(),
      price: Yup.number().required().positive(),
      ingredients: Yup.string().required(),
      amount: Yup.number().required().positive().integer(),
      url: Yup.string().required(),
      percentage: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: "Required Fields"
      });
    }

    const lunch = await _Lunch.default.findByPk(req.params.id);

    if (!lunch) {
      return res.status(400).json({
        error: "Lunch not found"
      });
    }

    await lunch.update(req.body);
    return res.json(lunch);
  }

  async delete(req, res) {
    const lunch = await _Lunch.default.findOne({
      where: {
        id: req.params.id
      }
    });
    lunch.destroy();
    return res.json({});
  }

}

var _default = new LunchController();

exports.default = _default;