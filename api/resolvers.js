const Media = require("./models/Media");
const User = require("./models/User");
const UserInfo = require("./models/UserInfo");

const resolvers = {
  Query: {
    medias: async (root, ctx) => {
      try {
        return await Media.find().sort({ createdDate: "desc" });
      } catch (error) {
        console.log("error", error);
      }
    },
    media: async (root, { _id }, ctx) => {
      try {
        return Media.findOne({ _id });
      } catch (error) {
        console.error("error", error);
      }
    },
    userInfo: async (root, ctx) => {
      try {
        return await UserInfo.find();
      } catch (error) {
        console.error("error", error);
      }
    }
  },
  Mutation: {
    addMedia: async (root, { data }, ctx) => {
      try {
        const media = await new Media({
          ...data
        }).save();
        return media;
      } catch (error) {
        console.error("error", error);
      }
    },
    updateMedia: async (root, { _id, data }, ctx) => {
      try {
        const updatedMedia = await Media.findOneAndUpdate(
          { _id },
          { $set: { ...data } },
          { new: true }
        );
        return updatedMedia;
      } catch (error) {
        console.error("error", error);
      }
    },
    deleteMedia: async (root, { _id }, ctx) => {
      try {
        const deleteMedia = await Media.findOneAndDelete({ _id });
        return deleteMedia;
      } catch (error) {
        console.error("error", error);
      }
    },
    addUserInfo: async (root, args, ctx) => {},
    updateUserInfo: async (root, args, ctx) => {}
  }
};

module.exports = resolvers;
