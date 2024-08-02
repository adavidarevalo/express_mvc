const sequelize = require("./../config/db") 
require("./employees")

sequelize.sync().then(() => {
    console.log('Book table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });