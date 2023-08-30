import { Sequelize } from "sequelize";

const conn = new Sequelize("estate", "root", "ayomidemysql", {
  host: "localhost",
  dialect: "mysql",
});

export default conn;
