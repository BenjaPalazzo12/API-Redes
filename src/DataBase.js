require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_NAME, DB_PASSWORD, DB_HOST, DB_USER } = process.env;
const UserModel = require("./Models/User");
const ShareModel = require("./Models/Share");
const LikeModel = require("./Models/Like");
const PostModel = require("./Models/Post");
const CommentModel = require("./Models/Comment");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,

  {
    logging: false,
  }
);

UserModel(sequelize);
ShareModel(sequelize);
LikeModel(sequelize);
PostModel(sequelize);
CommentModel(sequelize);

const { User, Like, Comment, Share, Post } = sequelize.models;

User.belongsToMany(Like, { through: "user_like" });
User.belongsToMany(Comment, { through: "user_comments" });
User.belongsToMany(Share, { through: "user_share" });
Post.belongsTo(User);

module.exports = {
  ...sequelize.models,
  connect: sequelize,
};
