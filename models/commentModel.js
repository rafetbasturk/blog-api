const mongoose = require("mongoose");

const Schema = mongoose.Schema

const CommentSchema = new Schema({
  text: {
    type: String,
    required: [true, "Please enter your comment."]
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Comment must belong to a user."]
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  // toObject: { virtuals: true }
})

CommentSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name email image"
  })
  next()
})

module.exports = mongoose.model("Comment", CommentSchema)