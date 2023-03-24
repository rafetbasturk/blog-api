const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError, UnAuthenticatedError } = require("../errors");
const Comment = require("../models/commentModel");
const Post = require("../models/postModel");
const checkPermissions = require("../utils/checkPermissions");

exports.createPost = async (req, res) => {
  const { title, text } = req.body
  req.body.user = req.user.userId

  if (!title || !text) throw new BadRequestError('Please Provide All Values');

  const post = await Post.create(req.body)

  res.status(StatusCodes.CREATED).json({
    post
  })
}

exports.getAllPosts = async (req, res) => {
  // No Await
  let query = {}
  if (req.user.role !== "admin") query.published = { $ne: false }
  let result = Post
    .find(query)
    .select(["-post", "-updatedAt", "-__v", "-comments", "-user"])
    .sort({ "createdAt": -1 })

  // pagination
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 6
  const skip = (page - 1) * limit
  result = result.skip(skip).limit(limit)

  const posts = await result;
  const numOfPosts = await Post.countDocuments(query)
  const numOfPages = Math.ceil(numOfPosts / limit)

  res.status(StatusCodes.OK).json({
    numOfPosts,
    numOfPages,
    posts
  })
}

exports.getPost = async (req, res) => {
  const post = await Post
    .findOne({ _id: req.params.id })
    .select(["-comments"])
    .populate({
      path: "user",
      select: "name email image"
    })

  if (!post) throw new NotFoundError(`No post with id: ${req.params.id}`)
  res.status(StatusCodes.OK).json({
    post
  })
}

exports.updatePost = async (req, res) => {
  const { id } = req.params
  const { title, text } = req.body
  if (!title || !text) throw new BadRequestError('Please Provide All Values');

  const post = await Post.findById(id)
  if (!post) throw new NotFoundError(`No post with id ${id}`);
  checkPermissions(req.user, post.user)

  const updatedPost = await Post.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true
  })
  res.status(StatusCodes.OK).json({
    post: updatedPost
  })
}

exports.deletePost = async (req, res) => {
  const { id } = req.params
  const post = await Post.findById(id)

  if (!post) throw new NotFoundError(`No post with id ${id}`);

  checkPermissions(req.user, post.user)

  await Post.findByIdAndDelete(id)

  res.status(StatusCodes.OK).json({
    msg: "Success! Post removed."
  })
}

exports.getPostComments = async (req, res) => {
  const { comments } = await Post.findById(req.params.id).populate({
    path: "comments",
    select: "text user createdAt"
  })
  if (!comments) throw NotFoundError("There are no comments on this post!")
  res.status(StatusCodes.OK).json({
    comments
  })
}

exports.createPostComment = async (req, res) => {
  if (!req.user) throw new UnAuthenticatedError('Log in to comment!')
  if (!req.body.text) throw new BadRequestError('Please Provide All Values!')
  req.body.user = req.user.userId

  const { _id: commentId } = await Comment.create(req.body)

  const { id } = req.params
  const post = await Post.findById(id)
  if (!post) throw new NotFoundError(`No post with id ${id}`);

  post.comments = [...post.comments, commentId]
  await post.save({ validateBeforeSave: false })

  res.status(StatusCodes.OK).json({
    post
  })
}