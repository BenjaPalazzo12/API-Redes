require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_NAME, DB_PASSWORD, DB_HOST, DB_USER } = process.env;
const UserModel = require("./Models/User");
const ShareModel = require("./Models/Share");
const PostModel = require("./Models/Post");
const CommentModel = require("./Models/Comment");
const PostLikeModel = require("./Models/PostLike");
const UserCommentsModel = require("./Models/UserComment");
const FollowModel = require("./Models/Follow");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,

  {
    logging: false,
  }
);

UserModel(sequelize);
ShareModel(sequelize);
UserCommentsModel(sequelize);
PostModel(sequelize);
CommentModel(sequelize);
PostLikeModel(sequelize);
FollowModel(sequelize);

const { User, Comment, Share, Post, PostLike, UserComment, Follow } =
  sequelize.models;

User.hasMany(Comment);
Comment.belongsTo(User);
Post.hasMany(Comment);
Comment.belongsTo(Post);

User.belongsToMany(Share, { through: "user_share" });
Post.belongsTo(User);
User.belongsToMany(Post, { through: PostLike, as: "LikedPosts" });

User.hasMany(PostLike);
PostLike.belongsTo(User);

Post.hasMany(PostLike);
PostLike.belongsTo(Post);

User.hasMany(UserComment);
UserComment.belongsTo(User);

User.belongsToMany(User, {
  through: Follow,
  as: "Followers",
  foreignKey: "followingId",
});
User.belongsToMany(User, {
  through: Follow,
  as: "Following",
  foreignKey: "followerId",
});

User.hasMany(Follow);
Follow.belongsTo(User);

Follow.belongsTo(User, {
  foreignKey: "followerId",
  as: "follower",
});

// Relación con el usuario seguido
Follow.belongsTo(User, {
  foreignKey: "followingId",
  as: "following",
});
User.hasMany(Post);
module.exports = {
  ...sequelize.models,
  connect: sequelize,
};
