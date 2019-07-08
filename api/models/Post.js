const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  imgUrl: {
    type: String,
    required: true
  },
  photographeName: String,
  createdDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Post", PostSchema);
