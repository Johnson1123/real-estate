import Sequelize from "sequelize";
import connection from "../database/db.js";

const Agent = connection.define("agents", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING(),
    allowNull: false,
  },
  twitter: {
    type: Sequelize.STRING(),
    allowNull: false,
  },
  facebook: {
    type: Sequelize.STRING(),
    allowNull: true,
  },
  instagram: {
    type: Sequelize.STRING(),
    allowNull: false,
  },
  linkedin: {
    type: Sequelize.STRING(),
    allowNull: false,
  },
  phone: {
    type: Sequelize.INTEGER(),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(),
    unique: true,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING(),
    allowNull: true,
  },
  level: {
    type: Sequelize.STRING(),
    allowNull: true,
  },

  password: {
    type: Sequelize.STRING(),
    allowNull: false,
  },
});

// user.prev("save", async function(password) {
//   if(!this.ismodifield("password")){
//     next();
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// user.methods.comparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

export default Agent;
