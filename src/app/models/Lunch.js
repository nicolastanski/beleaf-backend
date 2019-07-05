import Sequelize, { Model } from "sequelize";

class Lunch extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
        price: Sequelize.DECIMAL,
        ingredients: Sequelize.TEXT,
        amount: Sequelize.INTEGER,
        url: Sequelize.STRING,
        percentage: Sequelize.INTEGER
      },
      {
        sequelize
      }
    );

    return this;
  }
}

export default Lunch;
