const { Sequelize } = require("sequelize");
const {db, DataTypes, Model} = require ("../db/connection")

let comment;

class Comment extends Model{};

Comment.init({
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING,
},{
    sequelize :db,
    modelName: "comment"
})

module.exports = Comment;