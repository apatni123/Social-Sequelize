const { Sequelize } = require("sequelize");
const {db, DataTypes, Model} = require ("../db/connection")
let user;

class User extends Model{};

User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING
},{
    sequelize :db,
    modelName: "user"
})

module.exports = User;