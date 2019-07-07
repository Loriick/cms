require("dotenv").config();
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose
  .connect("mongodb://localhost:27017/raycms", { useNewUrlParser: true })
  .then(console.log("connect to the database"))
  .catch(err => console.error(err));

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
