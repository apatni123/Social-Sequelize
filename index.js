const { Comment, Like, Post, Profile, User } = require("./models/index");

// Define your associations here
User.hasOne(Profile)
Profile.belongsTo(User)

User.hasMany(Post)
Post.belongsTo(User)

User.hasMany(Comment)
Comment.belongsTo(Post)

User.belongsToMany(Like, {through: "user-like"})
Like.belongsToMany(User, {through: "user-like"})




module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}