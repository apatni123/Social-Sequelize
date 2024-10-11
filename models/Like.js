const { Sequelize } = require("sequelize");
const {db, DataTypes, Model} = require ("../db/connection")

let like;

class Like extends Model{};

Like.init({
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.STRING,
   
},{
    sequelize :db,
    modelName: "profile"
})

module.exports = Like;