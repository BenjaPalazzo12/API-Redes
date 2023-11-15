const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const registerUser = require("./Routes/UserRoutes/Register.routes");
const getUser = require("./Routes/UserRoutes/getUser.routes");
const loginUser = require("./Routes/UserRoutes/loginUser.routes");
const getUserById = require("./Routes/UserRoutes/getUserById.routes");
const deleteUser = require("./Routes/UserRoutes/deleteUser.routes");
const updateUser = require("./Routes/UserRoutes/updateUser.routes");
const updatePassword = require("./Routes/UserRoutes/updatePassword.routes");
const getUserByName = require("./Routes/UserRoutes/getUserByName.routes");

//Post Routers .)
const getPost = require("./Routes/PostRoutes/getPost.routes");
const getPosts = require("./Routes/PostRoutes/getPosts.routes");
const deletePost = require("./Routes/PostRoutes/deletePost.routes");
const deletePosts = require("./Routes/PostRoutes/deletePosts.routes");
const putPosts = require("./Routes/PostRoutes/putPost.routes");
const postPost = require("./Routes/PostRoutes/postPost.routes");
const getAllPost = require("./Routes/PostRoutes/getAllPost.routes");

const PostLike = require("./Routes/PostLikeRoutes/PostLike.routes");
const getPostLike = require("./Routes/PostLikeRoutes/getPostLike.routes");
const deletePostLike = require("./Routes/PostLikeRoutes/deletePostLike.routes");

const postComment = require("./Routes/CommentsRoutes/PostComment.routes");
const getComments = require("./Routes/CommentsRoutes/getComment.routes");
const updateComment = require("./Routes/CommentsRoutes/updateComment.routes");
const getCommentsById = require("./Routes/CommentsRoutes/getCommentById.routes");

const postFollow = require("./Routes/FollowRoutes/postFollow.routes");
const getFollow = require("./Routes/FollowRoutes/getFollow.routes");

const postShare = require("./Routes/ShareRoutes/postShare.routes");
const getShare = require("./Routes/ShareRoutes/getShare.routes");
const deleteShare = require("./Routes/ShareRoutes/deleteShare.routes");

const postMessage = require("./Routes/Message/postMessage.routes");
const getMessage = require("./Routes/Message/getMessage.routes");
const deleteMessage = require("./Routes/Message/deleteMessage.routes");

app.use("/", registerUser);
app.use("/", getUser);
app.use("/", loginUser);
app.use("/", getUserById);
app.use("/", deleteUser);
app.use("/", updateUser);
app.use("/", updatePassword);
app.use("/", getUserByName);

//Post Routes
app.use("/", getPost);
app.use("/", getPosts);
app.use("/", deletePost);
app.use("/", deletePosts);
app.use("/", postPost);
app.use("/", putPosts);
app.use("/", getAllPost);

app.use("/", PostLike);
app.use("/", getPostLike);
app.use("/", deletePostLike);

app.use("/", postComment);
app.use("/", getComments);
app.use("/", updateComment);
app.use("/", getCommentsById);

app.use("/", postFollow);
app.use("/", getFollow);

app.use("/", postShare);
app.use("/", getShare);
app.use("/", deleteShare);

app.use("/", postMessage);
app.use("/", getMessage);
app.use("/", deleteMessage);

module.exports = app;
