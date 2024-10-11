const { Sequelize } = require("sequelize");
const {db, DataTypes, Model} = require ("../db/connection")

let profile;

class Profile extends Model{};

Profile.init({
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: DataTypes.STRING
},{
    sequelize :db,
    modelName: "profile"
})

module.exports = Profile;