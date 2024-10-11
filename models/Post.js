const { Sequelize } = require("sequelize");
const {db, DataTypes, Model} = require ("../db/connection")

let post;

class Post extends Model{};

Post.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
},{
    sequelize :db,
    modelName: "post"
})

module.exports = Post;