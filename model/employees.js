const {DataTypes} = require("sequelize");
const sequelize = require("./../config/db") 

const EmployeesModel = sequelize.define("employees", {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    }
 });

 module.exports = EmployeesModel;