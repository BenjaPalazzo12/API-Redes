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
module.exports = app;
