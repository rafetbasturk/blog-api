const mongoose = require("mongoose");
require("./commentModel");
require("./userModel");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a title."],
    trim: true
  },
  text: {
    type: String,
    required: [true, "Please enter blog text."],
    trim: true
  },
  image: {
    type: String,
    default: "template.jpeg"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Post must belong to a user."]
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }],
  published: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  // toObject: { virtuals: true }
})

PostSchema.virtual("url").get(function () {
  return `/posts/${this._id}`;
});

// PostSchema.pre(/^find/, function (next) {
//   this.find({ published: { $ne: false } })
//   next()
// })

// PostSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: "user",
//     select: "email image"
//   }).populate({
//     path: "comments",
//     select: "comment user"
//   })
//   next()
// })

module.exports = mongoose.model("Post", PostSchema)