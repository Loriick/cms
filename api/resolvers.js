const Post = require("./models/Post");

const resolvers = {
  Query: {
    posts: async (root, ctx) => {
      try {
        return await Post.find().sort({ createdDate: "desc" });
      } catch (error) {
        console.log("error", error);
      }
    },
    post: async (root, { _id }, ctx) => {
      try {
        return Post.findOne({ _id });
      } catch (error) {
        console.error("error", error);
      }
    }
  },
  Mutation: {
    addPost: async (root, { data }, ctx) => {
      try {
        const post = await new Post({
          ...data
        }).save();
        return post;
      } catch (error) {
        console.error("error", error);
      }
    },
    updatePost: async (root, { _id, data }, ctx) => {
      try {
        const updatedPost = await Post.findOneAndUpdate(
          { _id },
          { $set: { ...data } },
          { new: true }
        );
        return updatedPost;
      } catch (error) {
        console.error("error", error);
      }
    },
    deletePost: async (root, { _id }, ctx) => {
      try {
        const deletePost = await Post.findOneAndDelete({ _id });
        return deletePost;
      } catch (error) {
        console.error("error", error);
      }
    }
  }
};

module.exports = resolvers;
