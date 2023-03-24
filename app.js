require('dotenv').config()
require('express-async-errors');
const path = require('path')
const express = require("express");
const morgan = require('morgan');
const cookieParser = require("cookie-parser")
const errorHandler = require('./middlewares/error-handler');
const notFoundMiddleware = require('./middlewares/not-found');
const authRouter = require("./routes/authRoutes")
const postRouter = require("./routes/postRoutes")
const commentRouter = require("./routes/commentRoutes")

const app = express()

if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, './client/build')))
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/posts", postRouter)
app.use("/api/v1/comments", commentRouter)

app.use(notFoundMiddleware)
app.use(errorHandler)

module.exports = app