import Sequelize from "sequelize";
import connection from "../database/db.js";

const Property = connection.define("Properties", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  discount: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },

  description: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  seller: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  stock: {
    type: Sequelize.INTEGER(),
    allowNull: false,
  },
  sold: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
});

export default Property;
