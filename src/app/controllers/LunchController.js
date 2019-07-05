import Lunch from "../models/Lunch";
import * as Yup from "yup";
import { Op } from "sequelize";

class LunchController {
  async index(req, res) {
    const { page = 1, order = "desc" } = req.query;

    const totalPages = await Lunch.count();

    const lunches = await Lunch.findAll({
      where: {
        amount: {
          [Op.gt]: 0
        }
      },
      order: [["id", order]],
      limit: 5,
      offset: (page - 1) * 5
    });

    if (!lunches) {
      return res.json({ error: "Failure to list lunches" });
    }

    return res.json({
      lunches,
      page,
      total_pages: Math.ceil(totalPages / 5)
    });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .min(2)
        .required(),
      description: Yup.string().required(),
      price: Yup.number()
        .required()
        .positive(),
      ingredients: Yup.string().required(),
      amount: Yup.number()
        .required()
        .positive()
        .integer(),
      url: Yup.string().required(),
      percentage: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Required Fields" });
    }
    const lunch = await Lunch.create(req.body);

    return res.json(lunch);
  }

  async show(req, res) {
    const lunch = await Lunch.findByPk(req.params.id);

    if (!lunch) {
      return res.json({ error: "Lunch not found" });
    }

    return res.json(lunch);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .min(2)
        .required(),
      description: Yup.string().required(),
      price: Yup.number()
        .required()
        .positive(),
      ingredients: Yup.string().required(),
      amount: Yup.number()
        .required()
        .positive()
        .integer(),
      url: Yup.string().required(),
      percentage: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Required Fields" });
    }

    const lunch = await Lunch.findByPk(req.params.id);

    if (!lunch) {
      return res.status(400).json({ error: "Lunch not found" });
    }

    await lunch.update(req.body);

    return res.json(lunch);
  }

  async delete(req, res) {
    const lunch = await Lunch.findOne({
      where: {
        id: req.params.id
      }
    });
    lunch.destroy();

    return res.json({});
  }
}

export default new LunchController();
