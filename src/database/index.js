import Sequelize from "sequelize";
import Lunch from "../app/models/Lunch";
import User from "../app/models/User";

import databaseConfig from "../config/database";

const models = [Lunch, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
