const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const registerUser = require("./Routes/UserRoutes/Register.routes");
const getUser = require("./Routes/UserRoutes/getUser.routes");

//Post Routers
const getPost = require("./Routes/PostRoutes/getPost.routes");
const getPosts = require("./Routes/PostRoutes/getPosts.routes");
const deletePost = require("./Routes/PostRoutes/deletePost.routes");
const deletePosts = require("./Routes/PostRoutes/deletePosts.routes");
const putPosts = require("./Routes/PostRoutes/putPost.routes");

app.use("/", registerUser);
app.use("/", getUser);

//Post Routes
app.use("/", getPost);
app.use("/", getPosts);
app.use("/", deletePost);
app.use("/", deletePosts);
app.use("/", putPosts);
module.exports = app;
